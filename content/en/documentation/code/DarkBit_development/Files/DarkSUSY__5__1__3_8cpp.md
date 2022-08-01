---
title: 'file frontends/DarkSUSY_5_1_3.cpp'

description: "[No description available]"

---






[No description available] [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| | **[if](/documentation/code/files/darksusy__5__1__3_8cpp/#function-if)**(scan_level ) |
| | **[if](/documentation/code/files/darksusy__5__1__3_8cpp/#function-if)**(runOptions-> hasKey"debug_SLHA_filenames") |
| else | **[if](/documentation/code/files/darksusy__5__1__3_8cpp/#function-if)**(ModelInUse("CMSSM") and runOptions->getValueOrDef< bool >(false, "use_DS_isasugra") )<br>Option use_DS_isasugra<bool>: Use DS internal isasugra for parameter running (false)  |
| else | **[if](/documentation/code/files/darksusy__5__1__3_8cpp/#function-if)**(ModelInUse("MSSM63atQ")||ModelInUse("CMSSM") ) |
| | **[if](/documentation/code/files/darksusy__5__1__3_8cpp/#function-if)**((ModelInUse("MSSM63atQ")||ModelInUse("CMSSM")) &&! mssm_result) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| | **[BE_NAMESPACE](/documentation/code/files/darksusy__5__1__3_8cpp/#variable-be-namespace)**  |
| std::vector< double > | **[DSparticle_mass](/documentation/code/files/darksusy__5__1__3_8cpp/#variable-dsparticle-mass)**  |
| std::vector< double > | **[GAMBITparticle_mass](/documentation/code/files/darksusy__5__1__3_8cpp/#variable-gambitparticle-mass)**  |
| [END_BE_NAMESPACE](/documentation/code/files/common__macros_8hpp/#define-end-be-namespace) | **[BE_INI_FUNCTION](/documentation/code/files/darksusy__5__1__3_8cpp/#variable-be-ini-function)**  |
| bool | **[mssm_result](/documentation/code/files/darksusy__5__1__3_8cpp/#variable-mssm-result)**  |

## Detailed Description


**Author**: 

  * Anders Kvellestad ([anders.kvellestad@fys.uio.no](mailto:anders.kvellestad@fys.uio.no)) 
  * Pat Scott ([p.scott@imperial.ac.uk](mailto:p.scott@imperial.ac.uk)) 
  * Christoph Weniger ([c.weniger@uva.nl](mailto:c.weniger@uva.nl)) 
  * Torsten Bringmann ([torsten.bringmann@fys.uio.no](mailto:torsten.bringmann@fys.uio.no)) 
  * Lars A. Dal ([l.a.dal@fys.uio.no](mailto:l.a.dal@fys.uio.no)) 
  * Joakim Edsjo ([edsjo@fysik.su.se](mailto:edsjo@fysik.su.se)) 


**Date**: 

  * 2013 Mar
  * 2013 Apr 2015 Mar, Aug 2016 Feb
  * 2013 Jul
  * 2013 Jul, 2014 Mar, 2015 May, 2019 May
  * 2014 Mar
  * 2015 Aug, 2016 Mar


Frontend for DarkSUSY 5.1.3 backend



------------------

Authors (add name and date if you modify):



------------------


## Functions Documentation

### function if

```
if(
    scan_level 
)
```


### function if

```
if(
    runOptions-> hasKey"debug_SLHA_filenames"
)
```


Option debug_SLHA_filenames<std::vector<std::string>>: Optional override list of SLHA filenames used for backend initialization default


### function if

```
else if(
    ModelInUse("CMSSM") and runOptions->getValueOrDef< bool >(false, "use_DS_isasugra") 
)
```

Option use_DS_isasugra<bool>: Use DS internal isasugra for parameter running (false) 

### function if

```
else if(
    ModelInUse("MSSM63atQ")||ModelInUse("CMSSM") 
)
```


Option use_dsSLHAread<bool>: Use DS internal SLHA reader to initialize backend (false)


### function if

```
if(
    (ModelInUse("MSSM63atQ")||ModelInUse("CMSSM")) &&! mssm_result
)
```



## Attributes Documentation

### variable BE_NAMESPACE

```
BE_NAMESPACE {
  const double min_DS_rwidth = 5.e-3;
```


### variable DSparticle_mass

```
std::vector< double > DSparticle_mass;
```


### variable GAMBITparticle_mass

```
std::vector< double > GAMBITparticle_mass;
```


### variable BE_INI_FUNCTION

```
END_BE_NAMESPACE BE_INI_FUNCTION {
  
  bool static scan_level = true;
```


### variable mssm_result

```
bool mssm_result = false;
```



## Source code

```
//   GAMBIT: Global and Modular BSM Inference Tool
//   *********************************************

#include "gambit/Backends/frontend_macros.hpp"
#include "gambit/Backends/frontends/DarkSUSY_5_1_3.hpp"
#include "gambit/Utils/file_lock.hpp"
#include "gambit/Utils/mpiwrapper.hpp"

//#define DARKSUSY_DEBUG

// Some ad-hoc DarkSUSY global state.
BE_NAMESPACE
{
  const double min_DS_rwidth = 5.e-3; // 0.5%  to avoid numerical problems
  std::vector<double> DSparticle_mass;
  std::vector<double> GAMBITparticle_mass;
}
END_BE_NAMESPACE

// Initialisation function (definition)
BE_INI_FUNCTION
{
  // Initialize DarkSUSY (only) if run for the first time
  bool static scan_level = true;

  if (scan_level)
  {

    // Do the call to dsinit one-by-one for each MPI process, as DarkSUSY loads up
    // HiggsBounds, which writes files at init then reads them back in later.
    Utils::ProcessLock mylock("DarkSUSY_" STRINGIFY(SAFE_VERSION) "_init");
    mylock.get_lock();
    dsinit();
    mylock.release_lock();

    dsrdinit();

    // Initialize yield tables for use in cascade decays (initialize more if needed)
    dshainit(151); // Initialize positron tables
    dshainit(152); // Initialize gamma ray tables
    dshainit(154); // Initialize antiproton tables
    // Note, for DarkSUSY 5, anti-deuteron does not need special initialization
    // as they are calculated from antiproton fluxes

    // Call dshayield for first call initialization of variables
    double tmp1 = 100.0;
    double tmp2 = 10.0;
    int tmp3 = 15;
    int tmp4 = 152;
    int tmp5 = 0;
    dshayield(tmp1,tmp2,tmp3,tmp4,tmp5);

    scan_level = false;

  }

  // Initialization function for a given MSSM point
  // (previous capability DarkSUSY_PointInit)
  bool mssm_result = false;

  // If the user provides a file list, just read in SLHA files for debugging
  // and ignore the MSSM_spectrum dependency.
  if (runOptions->hasKey("debug_SLHA_filenames"))
  {
    static unsigned int counter = 0;
    logger() << LogTags::debug <<
      "Initializing DarkSUSY via debug_SLHA_filenames option." << EOM;

    std::vector<str> filenames = runOptions->getValue<std::vector<str> >("debug_SLHA_filenames");
    const char * filename = filenames[counter].c_str();
    int len = filenames[counter].length();
    int flag = 15;
    dsSLHAread(byVal(filename),flag,byVal(len));
    dsprep();

    counter++;
    if (counter >= filenames.size()) counter = 0;
    mssm_result = true;
  }

  // CMSSM with DS-internal ISASUGRA (should be avoided, only for debugging)
  else if (ModelInUse("CMSSM") and runOptions->getValueOrDef<bool>(false, "use_DS_isasugra"))
  {
    // Setup mSUGRA model from CMSSM parameters
    double am0    = *Param["M0"];     // m0
    double amhf   = *Param["M12"];    // m_1/2
    double aa0    = *Param["A0"];     // A0
    double asgnmu = *Param["SignMu"];  // sign(mu)
    double atanbe = *Param["TanBeta"];   // tan(beta)
    logger() << "Initializing DarkSUSY via dsgive_model_isasugra:" << EOM;
    logger() << "  m0        =" << am0    << std::endl;
    logger() << "  m_1/2     =" << amhf   << std::endl;
    logger() << "  A0        =" << aa0    << std::endl;
    logger() << "  sign(mu)  =" << asgnmu << std::endl;
    logger() << "  tan(beta) =" << atanbe << EOM;
    dsgive_model_isasugra(am0, amhf, aa0, asgnmu, atanbe);
    int unphys, hwarning;
    dssusy_isasugra(unphys, hwarning);

    if (unphys < 0)
    {
      backend_warning().raise(LOCAL_INFO, "Model point is theoretically inconsistent (DarkSUSY).");
      invalid_point().raise("Model point is theoretically inconsistent (DarkSUSY).");
      mssm_result = false;
    }
    else if (unphys > 0)
    {
      backend_warning().raise(LOCAL_INFO, "Neutralino is not the LSP (DarkSUSY).");
      invalid_point().raise("Neutralino is not the LSP (DarkSUSY).");
      mssm_result = false;
    }
    else if (hwarning != 0)
    {
      backend_warning().raise(LOCAL_INFO,
          "Radiative corrections in Higgs sector "
          "outside range of validity (DarkSUSY).");
      mssm_result = true;
    }
    else
    {
      mssm_result = true;
    }
  }

  else if (ModelInUse("MSSM63atQ") || ModelInUse("CMSSM"))
  {
    SLHAstruct mySLHA;
    bool use_dsSLHAread = runOptions->getValueOrDef<bool>(false, "use_dsSLHAread");
    int slha_version = 2;
    const Spectrum& mySpec = *Dep::MSSM_spectrum;
    try
    {
      mySLHA = mySpec.getSLHAea(2);
    }
    catch(Gambit::exception& e)
    {
        slha_version = 1;
        mySLHA = mySpec.getSLHAea(1);
        use_dsSLHAread = true;
    }

    // Use an actual SLHA file.  DarkSUSY is on its own wrt (s)particle widths this way.
    if (use_dsSLHAread || slha_version == 1)
    {
      if (!use_dsSLHAread) {backend_error().raise(LOCAL_INFO,
              "An SLHA1 spectrum requires use of the DarkSUSY SLHA reader rather than the diskless\n"
              "GAMBIT DarkSUSY initialization. To enable the DarkSUSY SLHA reader, set the option\n"
              "use_dsSLHAread for the function DarkSUSY_PointInit_MSSM to true.");}

      int rank = 0;
      #ifdef WITH_MPI
        if(GMPI::Is_initialized())
        {
          GMPI::Comm comm;
          rank = comm.Get_rank();
        }
      #endif

      // Add model select block to inform DS about 6x6 mixing
      if (slha_version == 2)
      {
          SLHAea::Block modsel_block("MODSEL");
          modsel_block.push_back("BLOCK MODSEL");
          modsel_block.push_back("6 3 # FV");
          mySLHA.push_back(modsel_block);
      }

      // Set filename
      std::string fstr = "DarkBit_temp_";
      fstr += std::to_string(rank) + ".slha";
      // Dump SLHA onto disk
      std::ofstream ofs(fstr);
      ofs << mySLHA;
      ofs.close();
      // Initialize SUSY spectrum from SLHA
      int len = fstr.size();
      int flag = 15;
      const char * filename = fstr.c_str();
      logger() << LogTags::debug << "Initializing DarkSUSY via SLHA." << EOM;
      dsSLHAread(byVal(filename),flag,byVal(len));
      //The following used to be a separate capability dsprep up to DS5
      //(as also specified in the manual)
      dsprep();
      mssm_result = true;
    }

    // Do pure diskless SLHA initialisation, including (s)particle widths from GAMBIT.
    else
    {
      if (init_diskless(mySLHA, *Dep::decay_rates) == 0 )
      {
        logger() << LogTags::debug << "Using diskless SLHA interface to DarkSUSY." << EOM;
        dsprep();
        mssm_result = true;
      }
    }
  }

  if ( (ModelInUse("MSSM63atQ") || ModelInUse("CMSSM")) && !mssm_result )
  {
    backend_warning().raise(LOCAL_INFO,
        "DarkSUSY point initialization failed.");
    invalid_point().raise("DarkSUSY point initialization failed.");
  }

}
END_BE_INI_FUNCTION


// Convenience functions (definitions)
BE_NAMESPACE
{

  void required_block(const std::string& name, const SLHAea::Coll& slha)
  {
    if (slha.find(name) != slha.end()) return;
    else backend_error().raise(LOCAL_INFO, "Sorry, DarkSUSY needs SLHA block: " + name + ".\n"
    "If you tried to read in a debug SLHA file with missing entries,                       \n"
    "then sort out your SLHA file so that it is readable by DarkSUSY!                      ");
  }

  void dsgenericwimp_nusetup(const double (&annihilation_bf)[29], const double (&Higgs_decay_BFs_neutral)[29][3],
   const double (&Higgs_decay_BFs_charged)[15], const double (&Higgs_masses_neutral)[3], const double &Higgs_mass_charged,
   const double &mwimp)
  {
    // Transfer WIMP mass common block.
    wabranch->wamwimp = mwimp;

    // Transfer branching fractions to WIMP annihilation common blocks.
    // For channel indices, see dswayieldone.f
    for (int i=1; i<=29; i++)
    {
      wabranch->wabr(i) = annihilation_bf[i-1];
    }

    // Transfer Higgs decay branching fractions (not widths) to Higgs decay common blocks.
    // The total width is not relevant, as all Higgs decay in flight eventually, so
    // only the BFs are needed to calculate the yields into neutrinos from decays in flight.
    for (int i=1; i<=3; i++)    // Loop over the neutral Higgses
    {
      for (int j=1; j<=29; j++) // Loop over the known decay channels
      {
        wabranch->was0br(j,i) = Higgs_decay_BFs_neutral[j-1][i-1];
      }
    }

    for (int i=1; i<=15; i++)   // Loop over the known charged Higgs decay channels
    {
      wabranch->wascbr(i) = Higgs_decay_BFs_charged[i-1];
    }

    // Transfer Higgs masses to common blocks.
    for (int i=1; i<=3; i++)    // Loop over the neutral Higgses
    {
      wabranch->was0m(i) = Higgs_masses_neutral[i-1];                   // Neutral Higgses
    }
    wabranch->wascm = Higgs_mass_charged;                               // Charged Higgses

    // Tell DarkSUSY we've taken care of business.
    wabranch->dswasetupcalled = true;

  }

  double neutrino_yield(const double& log10E, const int& ptype, void*&)
  {
    int istat = 0;
    const char object[3] = "su";
    double result = 1e-30 * dsntmuonyield(pow(10.0,log10E),10.0,object[0],3,1,ptype,istat);
    if ((istat bitand 1) == 1)
    {
      if (not piped_warnings.inquire()) // Don't bother re-raising a warning if it's already been done since the last .check().
        piped_warnings.request(LOCAL_INFO, "Neutrino yield from Sun is lower bound; likelihood will be conservative.");
    }
    if ((istat bitand 4) == 4)
    {
      if (not piped_warnings.inquire()) // Don't bother re-raising a warning if it's already been done since the last .check().
        piped_warnings.request(LOCAL_INFO, "DarkSUSY's dswayield_int didn't converge. This occasionally happens "
                                           "due to finite statistics in the nu yield tables from Pythia. "
                                           "This is benign (the missing integrals are always negligible).");
    }
    if (istat > 4)
    {
      std::ostringstream err;
      err << "Error from DarkSUSY::dswayield functions in neutrino flux calculation.  istat = " << istat;
      piped_errors.request(LOCAL_INFO, err.str());
    }
    return result;
  }

  // FIXME: add channel codes!
  int DSparticle_code(const str& particleID)
  {
    int kpart;
    if (particleID=="nu_e" or particleID=="nubar_e"){
     kpart=1;
    }else if (particleID=="e-_1" or particleID=="e+_1"){
     kpart=2;
    }else if (particleID=="nu_mu" or particleID=="nubar_mu"){
     kpart=3;
    }else if (particleID=="e-_2" or particleID=="e+_2"){
     kpart=4;
    }else if (particleID=="nu_tau" or particleID=="nubar_tau"){
     kpart=5;
    }else if (particleID=="e-_3" or particleID=="e+_3"){
     kpart=6;
    }else if (particleID=="u_1" or particleID=="ubar_1"){
     kpart=7;
    }else if (particleID=="d_1" or particleID=="dbar_1"){
     kpart=8;
    }else if (particleID=="u_2" or particleID=="ubar_2"){
     kpart=9;
    }else if (particleID=="d_2" or particleID=="dbar_2"){
     kpart=10;
    }else if (particleID=="u_3" or particleID=="ubar_3"){
     kpart=11;
    }else if (particleID=="d_3" or particleID=="dbar_3"){
     kpart=12;
    }else if (particleID=="gamma"){
     kpart=13;
    }else if (particleID=="W+" or particleID=="W-"){
     kpart=14;
    }else if (particleID=="Z0"){
     kpart=15;
    }else if (particleID=="g"){
     kpart=16;
    }else if (particleID=="h0_1"){
     kpart=18;
    }else if (particleID=="h0_2"){
     kpart=17;
    }else if (particleID=="A0"){
     kpart=19;
    }else if (particleID=="H+" or particleID=="H-"){
     kpart=20;
    }else if (particleID=="~nu_1" or particleID=="~nubar_1"){
     kpart=21;
    }else if (particleID=="~e-_1" or particleID=="~e+_1"){
     kpart=22;
    }else if (particleID=="~e-_4" or particleID=="~e+_4"){
     kpart=23;
    }else if (particleID=="~nu_2" or particleID=="~nubar_2"){
     kpart=24;
    }else if (particleID=="~e-_2" or particleID=="~e+_2"){
     kpart=25;
    }else if (particleID=="~e-_5" or particleID=="~e+_5"){
     kpart=26;
    }else if (particleID=="~nu_3" or particleID=="~nubar_3"){
     kpart=27;
    }else if (particleID=="~e-_3" or particleID=="~e+_3"){
     kpart=28;
    }else if (particleID=="~e-_6" or particleID=="~e+_6"){
     kpart=29;
    }else if (particleID=="~u_1" or particleID=="~ubar_1"){
     kpart=30;
    }else if (particleID=="~u_4" or particleID=="~ubar_4"){
     kpart=31;
    }else if (particleID=="~d_1" or particleID=="~dbar_1"){
     kpart=32;
    }else if (particleID=="~d_4" or particleID=="~dbar_4"){
     kpart=33;
    }else if (particleID=="~u_2" or particleID=="~ubar_2"){
     kpart=34;
    }else if (particleID=="~u_5" or particleID=="~ubar_5"){
     kpart=35;
    }else if (particleID=="~d_2" or particleID=="~dbar_2"){
     kpart=36;
    }else if (particleID=="~d_5" or particleID=="~dbar_5"){
     kpart=37;
    }else if (particleID=="~u_3" or particleID=="~ubar_3"){
     kpart=38;
    }else if (particleID=="~u_6" or particleID=="~ubar_6"){
     kpart=39;
    }else if (particleID=="~d_3" or particleID=="~dbar_3"){
     kpart=40;
    }else if (particleID=="~d_6" or particleID=="~dbar_6"){
     kpart=41;
    }else if (particleID=="~chi0_1"){
     kpart=42;
    }else if (particleID=="~chi0_2"){
     kpart=43;
    }else if (particleID=="~chi0_3"){
     kpart=44;
    }else if (particleID=="~chi0_4"){
     kpart=45;
    }else if (particleID=="~chi+_1" or particleID=="~chi-_1"){
     kpart=46;
    }else if (particleID=="~chi+_2" or particleID=="~chi-_2"){
     kpart=47;
    }else if (particleID=="~g"){
     kpart=48;
    } else{
     std::ostringstream err;
     err << "ERROR: translation into DS particle code not implemented "
         << "for string identifier " << particleID;
     backend_error().raise(LOCAL_INFO, err.str());
     kpart=-100;
    }
    return kpart;
  }

  int init_diskless(const SLHAstruct &mySLHA, const DecayTable &myDecays)
  {
    using SLHAea::to;
    DS5_PACODES *DSpart = &(*pacodes);

    // Define required blocks and raise an error if a block is missing
    required_block("SMINPUTS", mySLHA);
    required_block("VCKMIN",   mySLHA);
    required_block("MSOFT",    mySLHA);
    required_block("MASS",     mySLHA);
    required_block("NMIX",     mySLHA);
    required_block("VMIX",     mySLHA);
    required_block("UMIX",     mySLHA);
    required_block("ALPHA",    mySLHA);
    required_block("HMIX",     mySLHA);
    required_block("YU",       mySLHA);
    required_block("YD",       mySLHA);
    required_block("YE",       mySLHA);
    required_block("MSL2",     mySLHA);
    required_block("MSE2",     mySLHA);
    required_block("MSQ2",     mySLHA);
    required_block("MSD2",     mySLHA);
    required_block("MSU2",     mySLHA);
    required_block("TD",       mySLHA);
    required_block("TU",       mySLHA);
    required_block("TE",       mySLHA);
    required_block("USQMIX",   mySLHA);
    required_block("DSQMIX",   mySLHA);
    required_block("SELMIX",   mySLHA);
    required_block("SNUMIX",   mySLHA);

    // Make sure the b pole mass is present in the MASS block
    if (mySLHA.at("MASS").find(initVector<str>("5")) == mySLHA.at("MASS").end())
      backend_error().raise(LOCAL_INFO, "DarkSUSY init_diskless needs b pole mass entry (5) in SLHA(ea) MASS block.");

    // Do some initial DarkSUSY housekeeping.
    dsmssmzero();            // zero all the MSSM parameters and variables
    mssmtype->modeltype = 0; // tell DarkSUSY that we are working in the general MSSM
    // To match the DarkSUSY SLHAreader, you would need to also set
    // mssmswitch->higwid = 1;  // tell DarkSUSY not to use FeynHiggs for Higgs widths.

    // Block SMINPUTS
    couplingconstants->alphem           = 1./to<double>(mySLHA.at("SMINPUTS").at(1).at(1)); // 1/alpha_{QED}
    smruseful->alph3mz                  = to<double>(mySLHA.at("SMINPUTS").at(3).at(1));    // alpha_s @ MZ
    smruseful->gfermi                   = to<double>(mySLHA.at("SMINPUTS").at(2).at(1));    // Fermi constant
    mspctm->mass(DSparticle_code("Z0")) = to<double>(mySLHA.at("SMINPUTS").at(4).at(1));    // Z boson mass

    // Here we set the masses to be used in DarkSUSY.  Note that all masses in the mspctm->mass block
    // must match those in the ProcessCatalog in DarkBit, as these are used to define the kinematic
    // edges used in relic density integrations and similar within DarkSUSY.  Mostly these should be
    // pole masses, except in cases where that is not possible (i.e. light quarks).

    // Lepton masses
    mspctm->mass(DSpart->kl(1))  = to<double>(mySLHA.at("SMINPUTS").at(11).at(1));  // electron pole mass
    mspctm->mass(DSpart->kl(2))  = to<double>(mySLHA.at("SMINPUTS").at(13).at(1));  // muon pole mass
    mspctm->mass(DSpart->kl(3))  = to<double>(mySLHA.at("SMINPUTS").at(7).at(1));   // tau pole mass
    mspctm->mass(DSpart->knu(1)) = to<double>(mySLHA.at("SMINPUTS").at(12).at(1));  // nu_1 pole mass
    mspctm->mass(DSpart->knu(2)) = to<double>(mySLHA.at("SMINPUTS").at(14).at(1));  // nu_2 pole mass
    mspctm->mass(DSpart->knu(3)) = to<double>(mySLHA.at("SMINPUTS").at(8).at(1));   // nu_3 pole mass

    // Quark masses as defined in SLHA2
    mspctm->mu2gev               = to<double>(mySLHA.at("SMINPUTS").at(22).at(1)); // up quark mass @ 2 GeV
    mspctm->md2gev               = to<double>(mySLHA.at("SMINPUTS").at(21).at(1)); // down quark mass @ 2 GeV
    mspctm->ms2gev               = to<double>(mySLHA.at("SMINPUTS").at(23).at(1)); // strange mass @ 2 GeV
    mspctm->mcmc                 = to<double>(mySLHA.at("SMINPUTS").at(24).at(1)); // charm mass at m_c
    mspctm->mbmb                 = to<double>(mySLHA.at("SMINPUTS").at(5).at(1));  // bottom mass at m_b
    mspctm->mass(DSpart->kqu(3)) = to<double>(mySLHA.at("SMINPUTS").at(6).at(1));  // top pole mass

    // Do the DarkSUSY-style sin^2 theta_W calculation (will be overwritten later).
    smruseful->s2thw=dsgf2s2thw(smruseful->gfermi, couplingconstants->alphem, mspctm->mass(DSparticle_code("Z0")), mspctm->mass(DSpart->kqu(3)),1);

    // Set other internal quark masses for DarkSUSY
    dsfindmtmt();                                                                  // top mass at mt
    mspctm->mass(DSpart->kqu(1)) = mspctm->mu2gev;                                 // use 2GeV u mass as proxy for pole
    mspctm->mass(DSpart->kqd(1)) = mspctm->md2gev;                                 // use 2GeV d mass as proxy for pole
    mspctm->mass(DSpart->kqd(2)) = mspctm->ms2gev;                                 // use 2GeV s mass as proxy for pole
    mspctm->mass(DSpart->kqu(2)) = dsmqpole4loop(DSpart->kqu(2),mspctm->mcmc);     // use DarkSUSY internal routine to get mc pole
    mspctm->mass(DSpart->kqd(3)) = to<double>(mySLHA.at("MASS").at(5).at(1));      // the GAMBIT way to get the bottom pole mass
    //mspctm->mass(DSpart->kqd(3)) = dsmqpole4loop(DSpart->kqd(3),mspctm->mbmb);   // the DarkSUSY SLHAreader way to get mb pole

    // Block MINPAR we skip, it is not needed

    // Block MSOFT
    mssmpar->m1 = to<double>(mySLHA.at("MSOFT").at(1).at(1));
    mssmpar->m2 = to<double>(mySLHA.at("MSOFT").at(2).at(1));
    mssmpar->m3 = to<double>(mySLHA.at("MSOFT").at(3).at(1));
    mssmpar->mass2l(1) = pow(to<double>(mySLHA.at("MSOFT").at(31).at(1)),2);
    mssmpar->mass2l(2) = pow(to<double>(mySLHA.at("MSOFT").at(32).at(1)),2);
    mssmpar->mass2l(3) = pow(to<double>(mySLHA.at("MSOFT").at(33).at(1)),2);
    mssmpar->mass2e(1) = pow(to<double>(mySLHA.at("MSOFT").at(34).at(1)),2);
    mssmpar->mass2e(2) = pow(to<double>(mySLHA.at("MSOFT").at(35).at(1)),2);
    mssmpar->mass2e(3) = pow(to<double>(mySLHA.at("MSOFT").at(36).at(1)),2);
    mssmpar->mass2q(1) = pow(to<double>(mySLHA.at("MSOFT").at(41).at(1)),2);
    mssmpar->mass2q(2) = pow(to<double>(mySLHA.at("MSOFT").at(42).at(1)),2);
    mssmpar->mass2q(3) = pow(to<double>(mySLHA.at("MSOFT").at(43).at(1)),2);
    mssmpar->mass2u(1) = pow(to<double>(mySLHA.at("MSOFT").at(44).at(1)),2);
    mssmpar->mass2u(2) = pow(to<double>(mySLHA.at("MSOFT").at(45).at(1)),2);
    mssmpar->mass2u(3) = pow(to<double>(mySLHA.at("MSOFT").at(46).at(1)),2);
    mssmpar->mass2d(1) = pow(to<double>(mySLHA.at("MSOFT").at(47).at(1)),2);
    mssmpar->mass2d(2) = pow(to<double>(mySLHA.at("MSOFT").at(48).at(1)),2);
    mssmpar->mass2d(3) = pow(to<double>(mySLHA.at("MSOFT").at(49).at(1)),2);

    // Block HMIX
    mssmpar->mu = to<double>(mySLHA.at("HMIX").at(1).at(1));
    mssmpar->tanbe = to<double>(mySLHA.at("HMIX").at(2).at(1));

    // A boson mass
    mspctm->mass(DSparticle_code("A0")) = to<double>(mySLHA.at("MASS").at(36).at(1));
    mssmpar->ma = mspctm->mass(DSparticle_code("A0"));

    // Now set up some defaults (part of it will be overwritten later)
    dssuconst();
    mssmiuseful->lsp = DSpart->kn(1);
    mssmiuseful->kln = 1;
    // To match the DS SLHAreader, you would then need to call
    // int unphys, hwarning;
    // dsspectrum(unphys, hwarning);

    // CKM matrix read from VCKMIN - Wolfenstein parameters.
    double lambda = to<double>(mySLHA.at("VCKMIN").at(1).at(1));   // Wolfenstein lambda
    double A = to<double>(mySLHA.at("VCKMIN").at(2).at(1));        // Wolfenstein A
    double rhobar = to<double>(mySLHA.at("VCKMIN").at(3).at(1));   // Wolfenstein rhobar
    double etabar = to<double>(mySLHA.at("VCKMIN").at(4).at(1));   // Wolfenstein etabar
    // Use Wolfenstein converter to get the VCKM matrix.
    mixing->ckm(1,1) = Spectrum::Wolf2V_ud(lambda,A,rhobar,etabar);
    mixing->ckm(1,2) = Spectrum::Wolf2V_us(lambda,A,rhobar,etabar);
    mixing->ckm(1,3) = Spectrum::Wolf2V_ub(lambda,A,rhobar,etabar);
    mixing->ckm(2,1) = Spectrum::Wolf2V_cd(lambda,A,rhobar,etabar);
    mixing->ckm(2,2) = Spectrum::Wolf2V_cs(lambda,A,rhobar,etabar);
    mixing->ckm(2,3) = Spectrum::Wolf2V_cb(lambda,A,rhobar,etabar);
    mixing->ckm(3,1) = Spectrum::Wolf2V_td(lambda,A,rhobar,etabar);
    mixing->ckm(3,2) = Spectrum::Wolf2V_ts(lambda,A,rhobar,etabar);
    mixing->ckm(3,3) = Spectrum::Wolf2V_tb(lambda,A,rhobar,etabar);
    // The lower-order DarkSUSY SLHAreader way of doing it; not as good, but this is what you'd need to use to match DS exactly.
    //sckm->ckms12 = lambda;
    //sckm->ckms23 = A*pow(sckm->ckms12,2);
    //std::complex<double> aux(rhobar, etabar);
    //aux = aux * (sckm->ckms23/pow(sckm->ckms12,2)) * pow(sckm->ckms12,3);
    //sckm->ckms13 = std::norm(aux);
    //sckm->ckmdelta = std::arg(aux);
    //dssuconst_ckm();

    // In principle, we might want to change to VCKM instead of VCKMIN, if VCKM is present. Like this:
    // sckm->ckms12 = to<double>(mySLHA.at("VCKM").at(1).at(1));
    // sckm->ckms23 = to<double>(mySLHA.at("VCKM").at(2).at(1))*sckm.ckms12**2;
    // sckm->ckmdelta = 0;
    // for (int i=1; i<=3; i++) for (int j=1; j<=3; j++)
    // {
    //   mixing->ckm(i,j) = to<double_complex>(mySLHA.at("VCKM").at(i,j).at(2));
    // }

    // OK, we now have to enforce the tree-level condition for unitarity.
    // We then have a choice of calculating both sin^2 theta_W and MW
    // from alpha, MZ and GF as we normally do in DarkSUSY. This line would
    // enforce that:
    //  mspctm->mass(DSparticle_code("W+"))=mspctm->mass(DSparticle_code("Z0"))*sqrt(1.0-smruseful->s2thw);
    // However, it is more prudent to take the value of MW from the SLHA file
    // as given (read in earlier), and instead enforce the tree-level condition
    // by redefining sin^2 theta_W. That we do here:
    mspctm->mass(DSparticle_code("W+"))  = to<double>(mySLHA.at("MASS").at(24).at(1));    // W boson mass
    smruseful->s2thw=1.0-pow(mspctm->mass(DSparticle_code("W+"))/mspctm->mass(DSparticle_code("Z0")),2);

    // Higgs masses. Note h0_1 is the lightest CP-even neutral higgs, and h2_0 the heavier.
    mspctm->mass(DSparticle_code("h0_1")) = to<double>(mySLHA.at("MASS").at(25).at(1));
    mspctm->mass(DSparticle_code("h0_2")) = to<double>(mySLHA.at("MASS").at(35).at(1));
    mspctm->mass(DSparticle_code("H+"))   = to<double>(mySLHA.at("MASS").at(37).at(1));
    mspctm->mass(DSparticle_code("A0"))   = to<double>(mySLHA.at("MASS").at(36).at(1));

    // SUSY particles
    mspctm->mass(DSpart->ksnu(1)) =  to<double>(mySLHA.at("MASS").at(1000012).at(1));
    mspctm->mass(DSpart->ksnu(2)) =  to<double>(mySLHA.at("MASS").at(1000014).at(1));
    mspctm->mass(DSpart->ksnu(3)) =  to<double>(mySLHA.at("MASS").at(1000016).at(1));
    mspctm->mass(DSpart->ksl(1))  =  to<double>(mySLHA.at("MASS").at(1000011).at(1));
    mspctm->mass(DSpart->ksl(2))  =  to<double>(mySLHA.at("MASS").at(1000013).at(1));
    mspctm->mass(DSpart->ksl(3))  =  to<double>(mySLHA.at("MASS").at(1000015).at(1));
    mspctm->mass(DSpart->ksl(4))  =  to<double>(mySLHA.at("MASS").at(2000011).at(1));
    mspctm->mass(DSpart->ksl(5))  =  to<double>(mySLHA.at("MASS").at(2000013).at(1));
    mspctm->mass(DSpart->ksl(6))  =  to<double>(mySLHA.at("MASS").at(2000015).at(1));
    mspctm->mass(DSpart->ksqu(1)) =  to<double>(mySLHA.at("MASS").at(1000002).at(1));
    mspctm->mass(DSpart->ksqu(2)) =  to<double>(mySLHA.at("MASS").at(1000004).at(1));
    mspctm->mass(DSpart->ksqu(3)) =  to<double>(mySLHA.at("MASS").at(1000006).at(1));
    mspctm->mass(DSpart->ksqu(4)) =  to<double>(mySLHA.at("MASS").at(2000002).at(1));
    mspctm->mass(DSpart->ksqu(5)) =  to<double>(mySLHA.at("MASS").at(2000004).at(1));
    mspctm->mass(DSpart->ksqu(6)) =  to<double>(mySLHA.at("MASS").at(2000006).at(1));
    mspctm->mass(DSpart->ksqd(1)) =  to<double>(mySLHA.at("MASS").at(1000001).at(1));
    mspctm->mass(DSpart->ksqd(2)) =  to<double>(mySLHA.at("MASS").at(1000003).at(1));
    mspctm->mass(DSpart->ksqd(3)) =  to<double>(mySLHA.at("MASS").at(1000005).at(1));
    mspctm->mass(DSpart->ksqd(4)) =  to<double>(mySLHA.at("MASS").at(2000001).at(1));
    mspctm->mass(DSpart->ksqd(5)) =  to<double>(mySLHA.at("MASS").at(2000003).at(1));
    mspctm->mass(DSpart->ksqd(6)) =  to<double>(mySLHA.at("MASS").at(2000005).at(1));

    // Neutralinos carry the sign of the eigenvalue, as we need it for NMIX later
    mspctm->mass(DSpart->kn(1)) =  to<double>(mySLHA.at("MASS").at(1000022).at(1));
    mspctm->mass(DSpart->kn(2)) =  to<double>(mySLHA.at("MASS").at(1000023).at(1));
    mspctm->mass(DSpart->kn(3)) =  to<double>(mySLHA.at("MASS").at(1000025).at(1));
    mspctm->mass(DSpart->kn(4)) =  to<double>(mySLHA.at("MASS").at(1000035).at(1));

    // Charginos
    mspctm->mass(DSpart->kcha(1)) =  to<double>(mySLHA.at("MASS").at(1000024).at(1));
    mspctm->mass(DSpart->kcha(2)) =  to<double>(mySLHA.at("MASS").at(1000037).at(1));

    // Gluino
    mspctm->mass(DSparticle_code("~g")) =  to<double>(mySLHA.at("MASS").at(1000021).at(1));

    // Gravitino (not implemented in DarkSUSY)
    // mspctm->mass(DSpart->k...) =  to<double>(mySLHA.at("MASS").at(1000039).at(1));

    // Block NMIX
    for (int i=1; i<=4; i++)
    {
      for (int j=1; j<=4; j++)
      {
        mssmmixing->neunmx(i,j)=to<double>(mySLHA.at("NMIX").at(i,j).at(2));
      }
    }
    // Make NMIX imaginary if mass eigenvalue is negative
    for (int i=1; i<=4; i++)
    {
      for (int j=1; j<=4; j++)
      {
        if (mspctm->mass(DSpart->kn(i)) < 0)
        {
          mssmmixing->neunmx(i,j).im = mssmmixing->neunmx(i,j).re;
          mssmmixing->neunmx(i,j).re = 0.0;
        }
      }
      mspctm->mass(DSpart->kn(i)) = std::abs(mspctm->mass(DSpart->kn(i)));
    }

    // Block UMIX
    for (int i=1; i<=2; i++)
    {
      for (int j=1; j<=2; j++)
      {
        mssmmixing->chaumx(i,j)=to<double>(mySLHA.at("UMIX").at(i,j).at(2));
      }
    }

    // Block VMIX
    for (int i=1; i<=2; i++)
    {
      for (int j=1; j<=2; j++)
      {
        mssmmixing->chavmx(i,j)=to<double>(mySLHA.at("VMIX").at(i,j).at(2));
      }
    }

    // Block ALPHA
    mssmmixing->alpha = to<double>(mySLHA.at("ALPHA").back().at(0));  // Higgs mixing angle

    //If you want to exactly match the DarkSUSY SLHAreader, you should also now run
    //dssuconst_yukawa_running();

    // Block YE, YU, YD - Yukawas
    for (int i=1; i<=3; i++)
    {
      couplingconstants->yukawa(DSpart->kl(i))=to<double>(mySLHA.at("YE").at(i,i).at(2));
      couplingconstants->yukawa(DSpart->kqu(i))=to<double>(mySLHA.at("YU").at(i,i).at(2));
      couplingconstants->yukawa(DSpart->kqd(i))=to<double>(mySLHA.at("YD").at(i,i).at(2));
    }

    // Block MSL2, MSE2, MSQ2, MSU2, MSD2
    for (int i=1; i<=3; i++)
    {
      mssmpar->mass2l(i) = to<double>(mySLHA.at("MSL2").at(i,i).at(2));
      mssmpar->mass2e(i) = to<double>(mySLHA.at("MSE2").at(i,i).at(2));
      mssmpar->mass2q(i) = to<double>(mySLHA.at("MSQ2").at(i,i).at(2));
      mssmpar->mass2u(i) = to<double>(mySLHA.at("MSU2").at(i,i).at(2));
      mssmpar->mass2d(i) = to<double>(mySLHA.at("MSD2").at(i,i).at(2));
    }

    // BLOCK TE, TU and TD. I read these instead of AE, AU, AD.
    for (int i=1; i<=3; i++)
    {
      mssmpar->asofte(i)=to<double>(mySLHA.at("TE").at(i,i).at(2))/couplingconstants->yukawa(DSpart->kl(i));
      mssmpar->asoftu(i)=to<double>(mySLHA.at("TU").at(i,i).at(2))/couplingconstants->yukawa(DSpart->kqu(i));
      mssmpar->asoftd(i)=to<double>(mySLHA.at("TD").at(i,i).at(2))/couplingconstants->yukawa(DSpart->kqd(i));
    }

    // Block SNUMIX
    for (int i=1; i<=3; i++)
    {
      for (int j=1; j<=3; j++)
      {
        mssmmixing->slulmx(i,j) = to<double>(mySLHA.at("SNUMIX").at(i,j).at(2));
      }
    }

    // Block SELMIX
    for (int i=1; i<=6; i++)
    {
      for (int j=1; j<=3; j++)
      {
        mssmmixing->sldlmx(i,j) = to<double>(mySLHA.at("SELMIX").at(i,j).at(2));
        mssmmixing->sldrmx(i,j) = to<double>(mySLHA.at("SELMIX").at(i,j+3).at(2));
      }
    }

    // Block USQMIX
    for (int i=1; i<=6; i++)
    {
      for (int j=1; j<=3; j++)
      {
        mssmmixing->squlmx(i,j) = to<double>(mySLHA.at("USQMIX").at(i,j).at(2));
        mssmmixing->squrmx(i,j) = to<double>(mySLHA.at("USQMIX").at(i,j+3).at(2));
      }
    }

    // Block DSQMIX
    for (int i=1; i<=6; i++)
    {
      for (int j=1; j<=3; j++)
      {
        mssmmixing->sqdlmx(i,j) = to<double>(mySLHA.at("DSQMIX").at(i,j).at(2));
        mssmmixing->sqdrmx(i,j) = to<double>(mySLHA.at("DSQMIX").at(i,j+3).at(2));
      }
    }

    // Do flavour reordering for SLHA2 compatibility
    dsorder_flavour();
    // Set up SUSY vertices
    dsvertx();

    // At this point, if you wanted to match the DarkSUSY SLHAreader, you would also call
    // dshigwid();
    // dsspwid();
    // which just fudge a few widths...but we won't do that, because we can get real decay widths from DecayBit.

    // Set up Higgs widths.  h1_0 is the lightest CP even Higgs in GAMBIT (opposite to DS).
    widths->width(DSparticle_code("h0_1")) = myDecays.at(std::pair<int,int>(25,0)).width_in_GeV;
    widths->width(DSparticle_code("h0_2")) = myDecays.at(std::pair<int,int>(35,0)).width_in_GeV;
    widths->width(DSparticle_code("A0"))   = myDecays.at(std::pair<int,int>(36,0)).width_in_GeV;
    widths->width(DSparticle_code("H+"))   = myDecays.at(std::pair<int,int>(37,0)).width_in_GeV;

    // Set up Higgs partial widths.
    const static std::vector< std::vector<str> > charged_channels = DS_charged_h_decay_channels();
    const static std::vector< std::vector<str> > neutral_channels = DS_neutral_h_decay_channels();
    const static std::vector<str> sister_chan = initVector<str>("W+", "H-");
    const static std::vector<str> missing_chan = initVector<str>("W-", "H+");
    const DecayTable::Entry& h01 = myDecays.at(std::pair<int,int>(25,0));
    const DecayTable::Entry& h02 = myDecays.at(std::pair<int,int>(35,0));
    const DecayTable::Entry& A0  = myDecays.at(std::pair<int,int>(36,0));
    const DecayTable::Entry& Hpm = myDecays.at(std::pair<int,int>(37,0));
    for (unsigned int i = 0; i < neutral_channels.size(); i++)
    {
      const std::vector<str>& chan = neutral_channels[i];
      mssmwidths->hdwidth(i+1,2) = (h01.has_channel(chan) ? widths->width(DSparticle_code("h0_1")) * h01.BF(chan) : 0.0);
      mssmwidths->hdwidth(i+1,1) = (h02.has_channel(chan) ? widths->width(DSparticle_code("h0_2")) * h02.BF(chan) : 0.0);
      mssmwidths->hdwidth(i+1,3) = (A0.has_channel(chan)  ? widths->width(DSparticle_code("A0"))   * A0.BF(chan)  : 0.0);
      if (neutral_channels[i] == sister_chan)
      {
        // Add the missing W-H+ contributions.
        mssmwidths->hdwidth(i+1,2) = (h01.has_channel(missing_chan) ? widths->width(DSparticle_code("h0_1")) * h01.BF(missing_chan) : 0.0);
        mssmwidths->hdwidth(i+1,1) = (h02.has_channel(missing_chan) ? widths->width(DSparticle_code("h0_2")) * h02.BF(missing_chan) : 0.0);
        mssmwidths->hdwidth(i+1,3) = (A0.has_channel(missing_chan)  ? widths->width(DSparticle_code("A0"))   * A0.BF(missing_chan)  : 0.0);
      }
    }
    for (unsigned int i = 0; i < charged_channels.size(); i++)
    {
      mssmwidths->hdwidth(i+1,4) = (Hpm.has_channel(charged_channels[i]) ? widths->width(DSparticle_code("H+")) * Hpm.BF(charged_channels[i]) : 0.0);
    }

    // Set up SM fermion widths
    widths->width(DSparticle_code("u_3"))    = myDecays.at(std::pair<int,int>(6,1)).width_in_GeV;
    widths->width(DSparticle_code("e-_2"))  = myDecays.at(std::pair<int,int>(13,1)).width_in_GeV;
    widths->width(DSparticle_code("e-_3")) = myDecays.at(std::pair<int,int>(15,1)).width_in_GeV;

    // Set up SM gauge boson widths
    widths->width(DSparticle_code("W+")) = myDecays.at(std::pair<int,int>(24,0)).width_in_GeV;
    widths->width(DSparticle_code("Z0")) = myDecays.at(std::pair<int,int>(23,0)).width_in_GeV;

    // Set up sfermion widths
    widths->width(DSpart->ksnu(1)) = myDecays.at(std::pair<int,int>(1000012,0)).width_in_GeV;
    widths->width(DSpart->ksnu(2)) = myDecays.at(std::pair<int,int>(1000014,0)).width_in_GeV;
    widths->width(DSpart->ksnu(3)) = myDecays.at(std::pair<int,int>(1000016,0)).width_in_GeV;
    widths->width(DSpart->ksl(1))  = myDecays.at(std::pair<int,int>(1000011,0)).width_in_GeV;
    widths->width(DSpart->ksl(2))  = myDecays.at(std::pair<int,int>(1000013,0)).width_in_GeV;
    widths->width(DSpart->ksl(3))  = myDecays.at(std::pair<int,int>(1000015,0)).width_in_GeV;
    widths->width(DSpart->ksl(4))  = myDecays.at(std::pair<int,int>(2000011,0)).width_in_GeV;
    widths->width(DSpart->ksl(5))  = myDecays.at(std::pair<int,int>(2000013,0)).width_in_GeV;
    widths->width(DSpart->ksl(6))  = myDecays.at(std::pair<int,int>(2000015,0)).width_in_GeV;
    widths->width(DSpart->ksqu(1)) = myDecays.at(std::pair<int,int>(1000002,0)).width_in_GeV;
    widths->width(DSpart->ksqu(2)) = myDecays.at(std::pair<int,int>(1000004,0)).width_in_GeV;
    widths->width(DSpart->ksqu(3)) = myDecays.at(std::pair<int,int>(1000006,0)).width_in_GeV;
    widths->width(DSpart->ksqu(4)) = myDecays.at(std::pair<int,int>(2000002,0)).width_in_GeV;
    widths->width(DSpart->ksqu(5)) = myDecays.at(std::pair<int,int>(2000004,0)).width_in_GeV;
    widths->width(DSpart->ksqu(6)) = myDecays.at(std::pair<int,int>(2000006,0)).width_in_GeV;
    widths->width(DSpart->ksqd(1)) = myDecays.at(std::pair<int,int>(1000001,0)).width_in_GeV;
    widths->width(DSpart->ksqd(2)) = myDecays.at(std::pair<int,int>(1000003,0)).width_in_GeV;
    widths->width(DSpart->ksqd(3)) = myDecays.at(std::pair<int,int>(1000005,0)).width_in_GeV;
    widths->width(DSpart->ksqd(4)) = myDecays.at(std::pair<int,int>(2000001,0)).width_in_GeV;
    widths->width(DSpart->ksqd(5)) = myDecays.at(std::pair<int,int>(2000003,0)).width_in_GeV;
    widths->width(DSpart->ksqd(6)) = myDecays.at(std::pair<int,int>(2000005,0)).width_in_GeV;

    // Set up neutralino widths.  Note that the zero neutralino width is taken care of below.
    widths->width(DSpart->kn(1)) = myDecays.at(std::pair<int,int>(1000022,0)).width_in_GeV;
    widths->width(DSpart->kn(2)) = myDecays.at(std::pair<int,int>(1000023,0)).width_in_GeV;
    widths->width(DSpart->kn(3)) = myDecays.at(std::pair<int,int>(1000025,0)).width_in_GeV;
    widths->width(DSpart->kn(4)) = myDecays.at(std::pair<int,int>(1000035,0)).width_in_GeV;

    // Set up chargino widths.
    widths->width(DSpart->kcha(1)) = myDecays.at(std::pair<int,int>(1000024,0)).width_in_GeV;
    widths->width(DSpart->kcha(2)) = myDecays.at(std::pair<int,int>(1000037,0)).width_in_GeV;

    // Gluino width.
    widths->width(DSparticle_code("~g")) = myDecays.at(std::pair<int,int>(1000021,0)).width_in_GeV;

    // Gravitino width (not implemented in DS).
    //widths->width(DSparticle_code("~G")) = ;

    // Integration routines in DS cannot handle very small sparticle widths.
    // Make sure not to fall below minimal value in order to avoid numerical issues.
    for (std::size_t i=21; i<49; i++)
    {
      if (widths->width(i)<min_DS_rwidth *mspctm->mass(i))
      {
        widths->width(i)=min_DS_rwidth *mspctm->mass(i);
      }
    }

    #ifdef DARKSUSY_DEBUG
      // Spit out spectrum and width files for debug purposes.
      int u1 = 50;
      int u2 = 100050;
      #ifdef WITH_MPI
        int rank = GMPI::Comm().Get_rank();
        u1 += rank;
        u2 += rank;
      #endif
      dswspectrum(u1);
      dswwidth(u2);
    #endif

    return 0;  // everything OK (hah. maybe.)
  }

  std::vector<double> DD_couplings()
  {
    double gps,gns,gpa,gna;
    dsddgpgn(gps,gns,gpa,gna);
    std::vector<double> couplings;
    couplings.clear();
    couplings.push_back(gps);
    couplings.push_back(gns);
    couplings.push_back(gpa);
    couplings.push_back(gna);
    return couplings;
  }

  std::vector< std::vector<str> > DS_neutral_h_decay_channels()
  {
    return initVector< std::vector<str> >
     (initVector<str>("h0_2", "h0_2"),
      initVector<str>("h0_1", "h0_2"),
      initVector<str>("h0_1", "h0_1"),
      initVector<str>("A0", "A0"),
      initVector<str>("h0_2", "A0"),
      initVector<str>("h0_1", "A0"),
      initVector<str>("H+", "H-"),
      initVector<str>("Z0", "h0_2"),
      initVector<str>("Z0", "h0_1"),
      initVector<str>("Z0", "A0"),
      // actually supposed to be W+H- and W-H+
      initVector<str>("W+", "H-"),
      initVector<str>("Z0", "Z0"),
      initVector<str>("W+", "W-"),
      initVector<str>("nu_e", "nubar_e"),
      initVector<str>("e+_1", "e-_1"),
      initVector<str>("nu_mu", "nubar_mu"),
      initVector<str>("e+_2", "e-_2"),
      initVector<str>("nu_tau", "nubar_tau"),
      initVector<str>("e+_3", "e-_3"),
      initVector<str>("u_1", "ubar_1"),
      initVector<str>("d_1", "dbar_1"),
      initVector<str>("u_2", "ubar_2"),
      initVector<str>("d_2", "dbar_2"),
      initVector<str>("u_3", "ubar_3"),
      initVector<str>("d_3", "dbar_3"),
      initVector<str>("g", "g"),
      // actually qqg (not implemented in DS though)
      initVector<str>("d_3", "dbar_3", "g"),
      initVector<str>("gamma", "gamma"),
      initVector<str>("Z0", "gamma")
     );
  }

  std::vector< std::vector<str> > DS_charged_h_decay_channels()
  {
    return initVector< std::vector<str> >
     (initVector<str>("u_1", "dbar_1"),
      initVector<str>("u_1", "dbar_2"),
      initVector<str>("u_1", "dbar_3"),
      initVector<str>("u_2", "dbar_1"),
      initVector<str>("u_2", "dbar_2"),
      initVector<str>("u_2", "dbar_3"),
      initVector<str>("u_3", "dbar_1"),
      initVector<str>("u_3", "dbar_2"),
      initVector<str>("u_3", "dbar_3"),
      initVector<str>("e+_1", "nu_e"),
      initVector<str>("e+_2", "nu_mu"),
      initVector<str>("e+_3", "nu_tau"),
      initVector<str>("W+", "h0_2"),
      initVector<str>("W+", "h0_1"),
      initVector<str>("W+", "A0")
     );
  }
}
END_BE_NAMESPACE
```


-------------------------------

Updated on 2022-08-01 at 12:13:21 +0000
