---
title: "Compiler Matrix"
description: "List of compilers compatible with GAMBIT and different backends and scanners."
date: 2022-07-01T22:31:46+01:00
lastmod: 2022-07-01T22:31:46+01:00
draft: false
images: []
menu:
  documentation:
    parent: "help"
weight: 20
---

Below is a list of compilers compatible with GAMBIT and different backends and scanners. 

{{< alert icon="ⓘ" context="info" text="The backend and scanner entries refer to the form used in GAMBIT, i.e. after any patching or BOSSing applied by the GAMBIT build system." />}}

We have also tested various earlier compilers, but not in as much detail. Please let us know if you have information on presently untested combinations (marked with ?, or missing entirely).<br>
<br>
<table style="width:900px">
<tr>
<th></th><th></th>
<th class="rotate"><div><span>GAMBIT</span></div> </th>
<th class="rotate"><div><span> DDCalc </span></div> </th>
<th class="rotate"><div><span> DarkSUSY </span></div> </th>
<th class="rotate"><div><span> FeynHiggs </span></div> </th>
<th class="rotate"><div><span> HiggsBounds </span></div> </th>
<th class="rotate"><div><span> HiggsSignals </span></div> </th>
<th class="rotate"><div><span> LibFarrayTest </span></div> </th>
<th class="rotate"><div><span> LibFirst </span></div> </th>
<th class="rotate"><div><span> LibFortran </span></div> </th>
<th class="rotate"><div><span> MicrOmegas_MSSM </span></div> </th>
<th class="rotate"><div><span> MicrOmegas_SingletDM </span></div> </th>
<th class="rotate"><div><span> Pythia </span></div> </th>
<th class="rotate"><div><span> SPheno </span></div> </th>
<th class="rotate"><div><span> SUSY_HIT </span></div> </th>
<th class="rotate"><div><span> SuperIso </span></div> </th>
<th class="rotate"><div><span> gamLike </span></div> </th>
<th class="rotate"><div><span> gm2calc </span></div> </th>
<th class="rotate"><div><span> nulike </span></div> </th>
<th class="rotate"><div><span> <font color="white"> Diver </font></span></div> </th>
<th class="rotate"><div><span> Diver </span></div> </th>
<th class="rotate"><div><span> MultiNest </span></div> </th>
<th class="rotate"><div><span> GreAT </span></div> </th>
</tr>
<tr> <td class="check"> </td> </tr> <tr>
<td class="check"> <b>intel</b> </td> <td class="check"> <b>15.0.2</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>16.0.1</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>16.0.2</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td>
<td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b><a href="https://software.intel.com/en-us/articles/intel-compiler-version-16-not-compatible-with-recent-libcso6">16.0.3</a></b> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"></td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b><a href="https://software.intel.com/en-us/articles/intel-compiler-version-16-not-compatible-with-recent-libcso6">16.0.4</a></b> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"></td> <td class="check"> ? </td> <td class="check"> ? </td> <td class="check"> ? </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>17.0.1</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>17.0.2</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>17.0.3</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>17.0.4</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>17.0.5</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="red">✘</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>18.0.0</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"></td><td class="check"> <b>19.1.0</b></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green"></font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<tr> <td class="check"> </td> </tr> <tr>
<td class="check"> <b>gcc </b></td> <td class="check"> <b>4.8.4</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
  <td class="check"> </td> <td class="check"> <b>4.8.5</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>4.9.3</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>4.9.4</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>5.4.0</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>6.2.0</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"> </td> <td class="check"> <b>6.3.0</b> </td> <td class="check"> <font color="green">✔</font> </td>  <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green"></font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td> <td class="check"> <font color="green">✔</font> </td>
</tr>
<tr>
<td class="check"></td><td class="check"> <b>7.1.0</b></td>
<td class="check"> <font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green"></font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
</tr>
<tr>
<td class="check"></td><td class="check"> <b>8.2.1</b></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green"></font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
</tr>
<tr>
<td class="check"></td><td class="check"> <b>9.1.1</b></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green"></font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
</tr>
<tr>
<td class="check"></td><td class="check"> <b>9.2.1</b></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green"></font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
<td class="check"><font color="green">✔</font></td>
</tr>
</tr></table>
</div>