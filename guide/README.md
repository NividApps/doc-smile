---
title : Getting Started
---


# Getting Started


**Setup Smile Dev Environment**

* [Install Java ](getting-started.html#install-java)
* [Install Smile ](getting-started.html#install-smile)
* [Install Eclipse](getting-started.html#setup-eclipse)
* [Install Intellij](getting-started.html#setup-intellij-idea)
* [Create new Smile Project](getting-started.html#new-smile-project)
* [Import project into eclipse](getting-started.html#import-project-to-eclipse)
* [Import project into intelliJ](getting-started.html#import-project-to-intellij)

## Install Java


::: tip ENSURE JAVA 1.8 IS SET
To use the Smile platform, you need **JDK 8**. Be sure to have the java and
javac commands in the current path (you can check this by typing ``java
-version`` and ``javac -version`` at the shell prompt).
:::

```bash
> java -version
java version "1.8.0_111"
Java(TM) SE Runtime Environment (build 1.8.0_111-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.111-b14, mixed mode)
```

If Java 8 is not installed, follow thelink to install and SET to
Classpath.
<https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04>

**Create installs & softwares folder under user home.**

```bash
> cd    
~> mkdir installs
~> mkdir softwares
```

Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="350" src="https://www.youtube.com/embed/h6dPbTd7s6E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>



## Install Smile


1.  Download `upgrade-smile.sh` from bitbucket:  
    <https://bitbucket.org/metastay/metastay.bitbucket.io/downloads/upgrade-smile.sh>

2.  Copy the downloaded installer `upgrade-smile.sh` to ~/installs

3.  grant execute permission to this shell script:  

```bash
~> cd installs
installs> chmod +x upgrade-smile.sh
```

4.  Open `upgrade-smile.sh` file and set **eclipse_installed_dir** to ./eclipse/java-oxygen 
    
5.  In `upgrade-smile.sh` file also set **eclipse_dropins_plugins_dir** to
    “$eclipse_installed_dir”/eclipse/dropins

```bash
installs> ./upgrade-smile.sh 3.3.8
```

6. Set smile in the PATH

```bash
installs> cd 
~> gedit .bashrc
```

7.  Append the following 2 lines to .bashrc

```bash
export SMILE_HOME="$HOME/installs/smile"
export PATH=“$SMILE_HOME/bin:$PATH"
```

8. Reload Terminal (or restart terminal)

```bash
~>. .bashrc
```

9. Run smile command on Terminal

```bash
~>smile
Smile Version - 3.3.8
To create a new project : "smile  new <project-name>"
To create a new lib : "smile  create-lib <lib-name>"
To export lib : "smile  export-lib"
To reset the project : "smile  spile"
```
Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/h6dPbTd7s6E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


## Setup Eclipse


1. Download eclipse installer: 
    <http://www.eclipse.org/downloads/download.php?file=/oomph/products/eclipse-inst-linux64.tar.gz>
2. Copy the installer into softwares folder: ~/installs/softwares 
3. Unzip the installer: 
```bash
> cd ~/installs/softwares
> softwares> tar -xvf eclipse-inst-linux64.tar.gz
```
4. Run the installer:
    run the installer.

```bash
> softwares> cd eclipse-installer; ./eclipse-inst
```

5. Eclipse installation:
    
    *   choose Eclipse IDE for Java EE Developers
    *   Installation Folder: set ~/installs/eclipse/java-oxygen
    *   Click  “INSTALL”
    *   Could ask you to verify certificates, select all & add certificates
    *   Once installation completes, choose a workspace for eclipse and Launch

6. Xtext installation:
    *   go to “Help” -> “Install New Software”
    *   add this url as the site to download the software from: <http://download.eclipse.org/modeling/tmf/xtext/updates/composite/releases/>
    *   once the site content loads, check Xtext -> Xtext Complete SDK and click Next
    *   In the next screen choose Xtext Complete SDK and click Next
    *   Accept the terms and conditions and proceed
    *   restart eclipse.

7. Installation Complete:
    With this the eclipse installation is complete.


Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9Kny9zfhDpQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


## Setup Intellij IDEA

1. Download from here: 
    <https://download.jetbrains.com/idea/ideaIC-2017.2.7.tar.gz>

2. Copy the downloaded `ideaIC-2017.2.7.tar.gz` to ~/installs/softwares 
3. Unzip the `ideaIC-2017.2.7.tar.gz`
    
```bash
> cd ~/installs/softwares
> softwares> tar -xvf ideaIC-2017.2.7.tar.gz
```

4. Open intelliJ
    
5. Install Scala plugin:
    * Click on Configure -> Plugins
    *  Click on Browse Repositories
    *  Search for 'scala' (sort on downloads)
    *  Click on install

6. Install SBT plugin:
    *  Click on Configure -> Plugins
    *  Click on Browse Repositories
    *  Search for 'SBT' (sort on downloads)
    *  Click on install

6. Restart intelliJ and installation is complete


Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BsHDaxYLe08" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


##  New Smile Project


1.  Create a folder for your projects
```bash
~> mkdir projects
```

2.  Go inside the projects folder
```bash
~> cd projects
```

3.  To create a new Smile project:  create a smile project by projects> smile  new `<project_name>`
::: tip
While creating new project project_name must start with Capital. <br>
A new folder with all small letters will be created within which all the project files will be placed. </p>
:::

```bash
projects> smile new Mould
projects> cd mould
```

4.  Run sbt (this takes sometime to download & setup).
``` bash
projects/mould> sbt
```

5.  Run smile command
    run smile command insude sbt shell. Which will setup the project structure.
```bash
[Mould] $ smile
```

6.  Compile: run compile command to ensure no errors.
```bash
[Mould] $ compile
```

7.  Smile project is set. 

Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XTWiaytMB7I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


##  Import Project to Eclipse

1. Open eclipse

2. Go to File -> Import -> Existing Projects into Workspace 

3. Browse to the new project’s home folder and select the k folder
    example: ~/projects/mould/k

4. Click on Finish

5. Should see the project successfully imported with no errors.

Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XTWiaytMB7I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


##  Import Project to IntelliJ

1. Open intelliJ

2. Go to File -> New -> Project from Existing Sources 

3. Choose the build.sbt inside the smile project folder
    example:  ~/projects/mould/build.sbt

4. Set up Project SDK to java 1.8

5. Expand the Global SBT settings

6. Set up SMILE_HOME in VM parameters: -DSMILE_HOME=/home/`<user>`/installs/smile

7. click OK

8. Project should get imported successfully.



Video reference:

<div style="position: relative; padding-bottom: 50%; height: 0; overflow: hidden; max-width: 100%; ">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XTWiaytMB7I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
