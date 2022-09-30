### This repo contains a simple clone of youtube with search capabilities

### Live Demo
You can find a prototype of this App [here](https://touchstream.vercel.app/)

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
3. In the root, create a .env.local file with the following variables (more information on how to below):
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

For this demo to work, we have to first create the necessary credentials (API KEY) to access the API. Sign in to your preferred Google account and go to [this link](https://console.developers.google.com/apis/library/youtube.googleapis.com).

Follow [this tutorial](https://blog.hubspot.com/website/how-to-get-youtube-api-key) for detailed instructions.
This API key must be in the .env.local file `NEXT_PUBLIC_YOUTUBE_API_KEY`.

### Room for improvement
* Extensive testing (>70% Coverage) with Jest and Jasmine
* Complete responsiveness on mobile platforms for all screen sizes
* Implement autocomplete when searching for videos
* Add authentication and authorization
