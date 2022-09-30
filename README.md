
### This repo contains a simple clone of youtube

### Live Demo
You can find a prototype of this App [here](http://localhost:3000)



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I have also added integration tests with cypress

## Getting Started

1. Clone the repo and open in your code editor of choice

```
git clone https://github.com/MohammedAK1991/touchstream
```

2. Install dependencies

```
npm install
```
3. In the root, create a .env.local file with the following variables:
```
NEXT_PUBLIC_YOUTUBE_API_KEY= <your api key goes here>
```
4. Start the application on localhost
```bash
npm run dev
# or
yarn dev
```
5. Run integration test with cypress
```
npm run cypress:open
```
## API Keys

For this demo to work, we have to first create the necessary credentials (API KEY) to access the API. Sign in to your preferred Google account and go to   [this link](https://console.developers.google.com/apis/library/youtube.googleapis.com)
This API key must be in the .env.local file `NEXT_PUBLIC_YOUTUBE_API_KEY`.

##
