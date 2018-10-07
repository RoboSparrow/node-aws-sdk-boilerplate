# Configuring AWS SDK

Go to `.private` folder:

Copy one of authentication authentication templates without the `template.` prefix and fill in creds or your profile of yor local `aws-cli` install

1) `aws.json` (standalone): Supply region access key an secret
2) `aws-profile.json` (using aws cli redentials): Requires on [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed and configured on your machine. Supply region and profile name (i.e. `default`).

# Hard update dependencies

```bash
rm -f package-lock.json && npm --save-dev install nodemon && npx install-peerdeps --dev eslint-config-airbnb && npm install --save aws-sdk
```

TODO:

- switch credentials to dotenv
