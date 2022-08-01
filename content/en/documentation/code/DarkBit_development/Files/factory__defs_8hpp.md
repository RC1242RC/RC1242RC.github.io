---
title: 'file ScannerBit/factory_defs.hpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[Gambit](/documentation/code/namespaces/namespacegambit/)** <br>TODO: see if we can use this one:  |
| **[Gambit::Scanner](/documentation/code/namespaces/namespacegambit_1_1scanner/)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Gambit::Scanner::Function_Base< ret(args...)>](/documentation/code/classes/classgambit_1_1scanner_1_1function__base_3_01ret_07args_8_8_8_08_4/)** <br>Base function for the object that is upputed by "set_purpose".  |
| class | **[Gambit::Scanner::Function_Deleter< ret(args...)>](/documentation/code/classes/classgambit_1_1scanner_1_1function__deleter_3_01ret_07args_8_8_8_08_4/)**  |
| class | **[Gambit::Scanner::scan_ptr< ret(args...)>](/documentation/code/classes/classgambit_1_1scanner_1_1scan__ptr_3_01ret_07args_8_8_8_08_4/)** <br>Container class that hold the output of the "get_purpose" function.  |
| class | **[Gambit::Scanner::like_ptr](/documentation/code/classes/classgambit_1_1scanner_1_1like__ptr/)** <br>likelihood container for scanner plugins.  |
| class | **[Gambit::Scanner::Factory_Base](/documentation/code/classes/classgambit_1_1scanner_1_1factory__base/)** <br>Pure Base class of a plugin Factory function.  |

## Detailed Description


**Author**: 

  * Gregory Martinez ([gregory.david.martinez@gmail.com](mailto:gregory.david.martinez@gmail.com)) 
  * Tomas Gonzalo ([tomas.gonzalo@monash.edu](mailto:tomas.gonzalo@monash.edu)
  * Patrick Stoecker ([stoecker@physik.rwth-aachen.de](mailto:stoecker@physik.rwth-aachen.de)) 
  * Anders Kvellestad ([anders.kvellestad@fys.uio.no](mailto:anders.kvellestad@fys.uio.no)


**Date**: 

  * 2015 Feb, Mar
  * 2019 May
  * 2020 May
  * 2021 Feb


declaration for scanner module



------------------

Authors (add name and date if you modify):



------------------




## Source code

```
//  GAMBIT: Global and Modular BSM Inference Tool
//  *********************************************

#ifndef __FACTORY_DEFS_HPP__
#define __FACTORY_DEFS_HPP__

#include <string>
#include <typeinfo>
#ifdef __NO_PLUGIN_BOOST__
  #include <memory>
#else
  #include <boost/shared_ptr.hpp>
  #include <boost/enable_shared_from_this.hpp>
#endif

#ifdef WITH_MPI
  #include <chrono>
  #include "gambit/Utils/mpiwrapper.hpp"
#endif

#include "gambit/ScannerBit/scanner_utils.hpp"
#include "gambit/ScannerBit/printer_interface.hpp"
#include "gambit/ScannerBit/plugin_loader.hpp"
#include "gambit/Utils/signal_handling.hpp"

namespace Gambit
{
    namespace Scanner
    {
#ifdef __NO_PLUGIN_BOOST__
        using std::shared_ptr;
        using std::enable_shared_from_this;
#else
        using boost::shared_ptr;
        using boost::enable_shared_from_this;
#endif

        template<typename T>
        class Function_Base;

        template<typename T>
        class Function_Deleter;

        template<typename T>
        class scan_ptr;

        template<typename ret, typename... args>
        class Function_Base <ret (args...)> : public enable_shared_from_this<Function_Base <ret (args...)>>
        {
        private:
            friend class Function_Deleter<ret (args...)>;
            friend class scan_ptr<ret (args...)>;

            printer *main_printer;
            Priors::BasePrior *prior;
            std::string purpose;
            int myRealRank; // the actual MPI rank of the process, use for process dependent setup etc. getRank() is for printing only.

            double purpose_offset;

            bool use_alternate_min_LogL;

            bool _scanner_can_quit;

            virtual void deleter(Function_Base <ret (args...)> *in) const
            {
                delete in;
            }

            virtual const std::type_info & type() const {return typeid(ret (args...));}

        public:
            Function_Base(double offset = 0.) : myRealRank(0), purpose_offset(offset), use_alternate_min_LogL(false), _scanner_can_quit(false)
            {
                #ifdef WITH_MPI
                GMPI::Comm world;
                myRealRank = world.Get_rank();
                #endif
                // Check if we should be using the alternative min_LogL from the very beginning
                // (for example if we are resuming from a run where we already switched to this)
                if (Gambit::Scanner::Plugins::plugin_info.resume_mode())
                {
                   use_alternate_min_LogL = Gambit::Scanner::Plugins::plugin_info.check_alt_min_LogL_state();
                }
                else
                {
                   // New scan; delete any old persistence file
                   // But only do this if we are process 0, otherwise I think race conditions can occur.
                   // (TODO do we need to ensure a sync here in case other processes than 0 get too far ahead?)
                   if(myRealRank==0) Gambit::Scanner::Plugins::plugin_info.clear_alt_min_LogL_state();
                }
            }

            virtual double purposeModifier(double ret_val) {return ret_val;}
            virtual ret main(const args&...) = 0;
            virtual ~Function_Base(){}

            ret operator () (const args&... params)
            {
                Gambit::Scanner::Plugins::plugin_info.set_calculating(true);
                if(Gambit::Printers::auto_increment()) // This is slightly hacky, but I need to be able to disable the auto-incrementing in the post-processor scanner. Need to manually set the point ID.
                {
                  ++Gambit::Printers::get_point_id();
                }
                ret ret_val = main(params...);
                Gambit::Scanner::Plugins::plugin_info.set_calculating(false);

                return ret_val;
            }

            void setPurpose(const std::string p) {purpose = p;}
            void setPrinter(printer* p) {main_printer = p;}
            void setPrior(Priors::BasePrior *p) {prior = p;}
            printer &getPrinter() {return *main_printer;}
            printer &getPrinter() const {return *main_printer;} // Need a const version as well.
            Priors::BasePrior &getPrior() {return *prior;}
            std::vector<std::string> getParameters() {return prior->getParameters();}
            std::vector<std::string> getShownParameters() {return prior->getShownParameters();}
            std::string getPurpose() const {return purpose;}
            int getRank() const {return getPrinter().getRank();} // Printer controls the 'virtual' rank. Lets us re-print data from a point originally generated by another rank.
            void setRank(int r) {getPrinter().setRank(r);} // Needed by postprocessor to adjust 'virtual' rank; generally should not use otherwise.
            double getPurposeOffset() const { return purpose_offset; }
            void setPurposeOffset(double os) { purpose_offset = os; }
            unsigned long long int getPtID() const {return Gambit::Printers::get_point_id();}
            void setPtID(unsigned long long int pID) {Gambit::Printers::get_point_id() = pID;} // Needed by postprocessor; should not use otherwise.
            unsigned long long int getNextPtID() const {return getPtID()+1;} // Needed if PtID required by plugin *before* operator() is called. See e.g. GreAT plugin.

            void tell_scanner_early_shutdown_in_progress()
            {
                Gambit::Scanner::Plugins::plugin_info.set_early_shutdown_in_progress();
            }

            void disable_external_shutdown() { _scanner_can_quit = true; }

            bool scanner_can_quit() { return _scanner_can_quit; }

            void switch_to_alternate_min_LogL()
            {
                use_alternate_min_LogL = true;
                #ifdef WITH_MPI
                    GMPI::Comm& myComm(Gambit::Scanner::Plugins::plugin_info.scanComm());
                    static const int TAG = Gambit::Scanner::Plugins::plugin_info.MIN_LOGL_MSG;
                    MPI_Request req_null = MPI_REQUEST_NULL;
                    int nullmsg = 0; // Don't need message content, the message itself is the signal.
                    myComm.IsendToAll(&nullmsg, 1, TAG, &req_null);
                #endif
                Gambit::Scanner::Plugins::plugin_info.save_alt_min_LogL_state(); // Write a file to disk so that upon startup we can check if the alternate min LogL is supposed to be used.
            }

            bool check_for_switch_to_alternate_min_LogL()
            {
                if(not use_alternate_min_LogL)
                {
                    #ifdef WITH_MPI
                    GMPI::Comm& myComm(Gambit::Scanner::Plugins::plugin_info.scanComm());
                    static const int TAG = Gambit::Scanner::Plugins::plugin_info.MIN_LOGL_MSG;
                    if(myComm.Iprobe(MPI_ANY_SOURCE, TAG))
                    {
                    int nullmsg;
                    MPI_Status msg_status;
                    myComm.Recv(&nullmsg, 1, MPI_ANY_SOURCE, TAG, &msg_status); // Recv the message to delete it.
                    use_alternate_min_LogL = true;
                    }
                    #endif
                }
                // If we didn't decide to switch yet, check for the existence of
                // the persistence file. This is not necessary for proper functioning
                // of this system, but it allows users to manually create the persistence file
                // as a 'hack' to force the likelihood to switch to the alternate min LogL
                // value.
                if(not use_alternate_min_LogL)
                {
                    use_alternate_min_LogL = Gambit::Scanner::Plugins::plugin_info.check_alt_min_LogL_state();
                }
                return use_alternate_min_LogL;
            }

       };

        template<typename ret, typename... args>
        class Function_Deleter<ret (args...)>
        {
        private:
            Function_Base <ret (args...)> *obj;

        public:
            Function_Deleter(void *in) : obj(static_cast< Function_Base<ret (args...)>* >(in)) {}

            Function_Deleter(const Function_Deleter<ret (args...)> &in) : obj(in.obj) {}

            void operator =(const Function_Deleter<ret (args...)> &in)
            {
                obj = in.obj;
            }

            void operator()(Function_Base <ret (args...)> *in)
            {
                obj->deleter(in);
            }
        };

        template<typename ret, typename... args>
        class scan_ptr<ret (args...)> : public shared_ptr< Function_Base< ret (args...)> >
        {
        private:
            typedef shared_ptr< Function_Base< ret (args...) > > s_ptr;

        public:
            scan_ptr(){}
            scan_ptr(const scan_ptr &in) : s_ptr (in){}
            scan_ptr(scan_ptr &&in) : s_ptr (std::move(in)) {}
            scan_ptr(void *in) : s_ptr
                                (
                                    static_cast< Function_Base<ret (args...)>* >(in),
                                    Function_Deleter<ret (args...)>(in)
                                )
            {
                if (typeid(ret (args...)) != this->get()->type())
                {
                    scan_err << "scan_ptr and the functor return by \"get functor\" do not have the same type." << scan_end;
                }
            }

            scan_ptr<ret (args...)> &operator=(void *in)
            {
                    this->s_ptr::operator=
                    (
                        s_ptr
                        (
                            static_cast< Function_Base<ret (args...)>* >(in),
                            Function_Deleter<ret (args...)>(in)
                        )
                    );

                    if (typeid(ret (args...)) != this->get()->type())
                    {
                        scan_err << "scan_ptr and the functor return by \"get functor\" do not have the same type." << scan_end;
                    }

                    return *this;
            }

            scan_ptr<ret (args...)> &operator=(const scan_ptr<ret (args...)> &in)
            {
                this->s_ptr::operator=(in);

                return *this;
            }

            scan_ptr<ret (args...)> &operator=(s_ptr &&in)
            {
                this->s_ptr::operator=(std::move(in));

                return *this;
            }

            ret operator()(const args&... params)
            {
                return (*this)->operator()(params...);
            }
        };

        // TODO (Ben): I am just flagging a possible issue here. In principle, can't
        // two like_ptrs be active in the one scan? I.e. we could calculate two separate
        // likelihood functions at the one point (no scanners currently allow this, but
        // in-principle they could). If so, then there is a printer issue here to worry
        // about, namely, an error will be thrown if we attempt to print MPIrank, pointID,
        // and unitCubeParameters twice for the same point, which it seems is what would
        // happen. So we need to change something here so that they only get printed once
        // per point, no matter how many like_ptr's may be "active" at once.

        class like_ptr : public scan_ptr<double (std::unordered_map<std::string, double> &)>
        {
        private:
            typedef scan_ptr<double (std::unordered_map<std::string, double> &)> s_ptr;
            std::unordered_map<std::string, double> map;

        public:
            like_ptr(){}
            like_ptr(const like_ptr &in) : s_ptr (in){}
            like_ptr& operator=(const like_ptr&) = default;
            //like_ptr(like_ptr &&in) : s_ptr (std::move(in)) {}
            like_ptr(void *in) : s_ptr(in) {}

            std::unordered_map<std::string, double> transform(const std::vector<double> &vec)
            {
                (*this)->getPrior().transform(vec, map);
                return map;
            }

            std::vector<std::string> get_names() const
            {
              return (*this)->getPrior().getShownParameters();
            }

            std::vector<double> inverse_transform(const std::unordered_map<std::string, double> &physical)
            {
                return (*this)->getPrior().inverse_transform(physical);
            }

            double operator()(const std::vector<double> &vec)
            {
                int rank = (*this)->getRank();
                (*this)->getPrior().transform(vec, map);
                double ret_val = (*this)->operator()(map);
                double modified_ret_val = (*this)->purposeModifier(ret_val);
                unsigned long long int id = Gambit::Printers::get_point_id();
                (*this)->getPrinter().print(ret_val, (*this)->getPurpose(), rank, id);
                (*this)->getPrinter().print(modified_ret_val, "Modified" + (*this)->getPurpose(), rank, id);
                if (vec.size() > 0 && (*this)->getPrinter().get_printUnitcube())
                {
                  (*this)->getPrinter().print(vec, "unitCubeParameters", rank, id);
                }
                (*this)->getPrinter().print(id,   "pointID", rank, id);
                (*this)->getPrinter().print(rank, "MPIrank", rank, id);
                (*this)->getPrinter().enable(); // Make sure printer is re-enabled (might have been disabled by invalid point error)

                // Return the value of the function, offset by any offset set
                return modified_ret_val + (*this)->getPurposeOffset();
            }

            double operator()(std::unordered_map<std::string, double> &map, const std::vector<double> &vec = std::vector<double>())
            {
                int rank = (*this)->getRank();
                (*this)->getPrior().transform(vec, map);
                double ret_val = (*this)->operator()(map);
                double modified_ret_val = (*this)->purposeModifier(ret_val);
                unsigned long long int id = Gambit::Printers::get_point_id();
                (*this)->getPrinter().print(ret_val, (*this)->getPurpose(), rank, id);
                (*this)->getPrinter().print(modified_ret_val, "Modified" + (*this)->getPurpose(), rank, id);
                if (vec.size() > 0 && (*this)->getPrinter().get_printUnitcube())
                {
                  (*this)->getPrinter().print(vec, "unitCubeParameters", rank, id);
                }
                (*this)->getPrinter().print(id,   "pointID", rank, id);
                (*this)->getPrinter().print(rank, "MPIrank", rank, id);
                (*this)->getPrinter().enable(); // Make sure printer is re-enabled (might have been disabled by invalid point error)

                // Return the value of the function, offset by any offset set
                return modified_ret_val + (*this)->getPurposeOffset();
            }
        };

        class Factory_Base
        {
        public:
                virtual void * operator() (const std::string &purpose) const = 0;
                virtual ~Factory_Base() {};
        };
    }
}

#endif
```


-------------------------------

Updated on 2022-08-01 at 12:13:19 +0000
