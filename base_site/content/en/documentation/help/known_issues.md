---
title: "Known Issues"
description: "List of known issues with the GAMBIT software."
date: 2022-07-01T22:31:46+01:00
lastmod: 2022-07-01T22:31:46+01:00
draft: false
images: []
menu:
  documentation:
    parent: "help"
weight: 30
---

{{< alert icon="ⓘ" context="info">}}
Please report any new unresolved issues [here](https://github.com/GambitBSM/gambit_1.2/issues/new).
{{< /alert >}}

| Issue | Description
|---|---|
| Error `Python error: is a directory, cannot continue` when linked to MPICH and executing via mpiexec/mpirun with >1 process | In some rare cases, this error will occur when trying to run with multiple MPI processes after having compiled with MPI support via the MPICH libraries. As best we can tell, it is caused by a bug in either the MPICH libraries or some version of the Python runtime libraries. If you see this error, try changing MPI library to something other than MPICH. |