# Slalom Profile Creator

# Instruction on how to use
1. All you need is the `go.sh` file
2. Edit the JSON in there 
   1. Put your email address in the **emailToSendProfileTo** field
   2. Edit the profile information
3. Run `go.sh`
4. Wait to receive the email

# Deployment
This tool is deployed on GCP as a function.

# Configuration
The only thing this tool needs is the `SENDGRID_API_KEY` environment variable

# Local testing
For local testing, run `node local.js profile.json`, where `profile.json` is the *profile* part of the payload. This will create the PPTX file in the current folder.