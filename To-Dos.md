Create Login Page
Create interface to create new users and login existing users
Create API routes for new users
Create API routes for existing user login

Create Management View
Manager has ability to Assign UACs to Case Manager
Manager can view all information for each UAC including assigned case manager, task progress, and be able to email the case manager as well as view the Case manager view for each UAC
API Routes for Manager view
Case Manager Page
Add UAC button
Add Case Manager button
Views for Manager Page
single line UAC summary
3rd Party API routes for
GOOGLE MAPS
GOOGLE EARTH
SMARTY STREETS
Create release request generator

Create Layout/Views for
Case Manager View
Case manager caseload populates with each UAC assigned to the case manager
Tasks with dates populate in task aside
Current UAC info populates in UAC tab
Sponsor for Current UACinfo populates in sponsor tab
EDIT buttons for all table information.
Case Manager View Page
Create Databases which contain tables for:
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
