# Next.js on Elastic Beanstalk

This is a minimal Next.js app prepared for deployment on AWS Elastic Beanstalk (EB) using the Node.js platform.

## What’s included
- Pages Router (pages/)
- MUI baseline in `_app.js`
- SSR test on `/` via `getServerSideProps`
- Procfile to bind EB-provided `$PORT`
- `postinstall` builds on EB
- `.ebignore` to reduce bundle size

## Run locally
```bash
npm install
npm run dev
# visit http://localhost:3000
```

Production-mode sanity check:
```bash
npm run build
PORT=3000 npm run start
```

## Deploy to Elastic Beanstalk
```bash
pip install --user awsebcli
# ensure ~/.local/bin is on PATH

# from next-app directory
eb init
# select region and Node.js 20 (or 18) on Amazon Linux 2023

eb create my-next-env --single
# wait for green status

eb deploy
```

## Environment variables
- Client-visible vars must be prefixed with `NEXT_PUBLIC_`.
- Server-only secrets should NOT be prefixed.
- Set vars in EB using `eb setenv NAME=value`.

## Notes
- Health check path `/` returns 200 by default.
- If you later add Amplify/Auth, add your EB URL to Cognito callback URLs.