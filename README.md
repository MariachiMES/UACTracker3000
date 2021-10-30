![GitHub license](https://img.shields.io/badge/license--blue.svg)

# UAC Tracker 3000

# Description

As an emergency influx shelter team lead, I want to be able to track and manage data pertaining to unaccompanied minors and their sponsors, manage user access, leverage 3rd party APIs, and auto-generation functionality to streamline workflow.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Tests](#tests)

- [Contributions](#contributions)

- [Features](#features)

- [Questions](#questions)

## Installation

none

## Usage

used for UAC emergency influx Case Management

## Credits

David Ortiz, Ben Townsend, Francisco Almaraz

## Tests

none

## Contributions

email david ortiz @davdjortizmusic@gmail.com

## Features

google earth, google maps, smarty streets

## Questions

[GitHub](https://github.com/mariachiMES)

Additional questions: [E-Mail](mailto:davidjortizmusic@gmail.com)

# DEV NOTES

## User Story

-As an emergency influx shelter team lead, I want to be able to track and manage data pertaining to unaccompanied minors and their sponsors, manage user access, leverage 3rd party APIs, and auto-generation functionality to streamline workflow.

## Brief List of MVP Functionality (What information can the user get/see?  What actions can the user do?)

-add unaccompanied minors to database through the front end and save to a database.
-access and edit UAC data from the front end.  
-use googlemaps, google earth and smarty street APIs to one-click generate street view, earth view, and smarty streets verification.  
-use a team lead view to track data for all case managers and their caseloads.

## API Routes (list of general API and homepage routes you expect)

-GET routes for CaseManagers
-GET routes for UACs
-GET route for Sponsor
-POST route for UACs & Case Managers & Sponsors
-DELETE route for UACs & Case Managers & Sponsors

## 3rd Party API/SDK/library ideas

-Google maps
-Google Earth
-Smarty Streets
-Bulma

## objects

Case Manager {
Username: allow null false
Password: allow null false
Role: string allow null false
Name: string allow null false
Caseload: auto increment
}
UAC:
First name: string allow null false,
Last name: string allow null false,
A#: Int (9) allow null false,
Gender: string allow null false,
COO: string,
Date Admitted: date,
Category: string,
DOB: date,
FRP: date,
ARI: date,
Trail of BCs: date,
UAC BC: date,
Sponsor BGC: date,
Sponsor FP: date,
Sponsor Cleared: date,
HHM1 ID Type:
HHM1 BGC: date,
HHM1 FP: date,
HHM1 Cleared: date,
SIR: int,
SIR Narrative: string
Caretaker Relationship: string,
Caretaker Corroboration: boolean,
POA type: string,
POA date: date,
Sponsor:
Case Manager

Sponsor:{
name: string,
Gender: string allow,
ID type: String,
ID date: date,
Address 1: string,
Address 2: string,
City: string;
State : String,
Prior Address: bolean,
pronoun: str
pronoun possessive: str,
