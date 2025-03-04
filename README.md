# FilthCheck

FilthCheck is a simple API for detecting Not Safe For Work (NSFW) image content. It utilizes huggingface models to analyze images and classify them as either safe or NSFW.

## Features
- Detects NSFW content in images
- Lightweight and easy to use API
- Fast inference using Hugging Face transformers
- Uses Supabase for storage and authentication
- Built with Node.js, Express.js, and TypeScript

## Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building REST APIs
- **TypeScript** - Type-safe JavaScript
- **Supabase** - Database and authentication
- **Hugging Face Transformers** - Pre-trained deep learning models for image classification


## API Endpoints

### Detect NSFW Content

**POST** `/api/detect/image`

#### Request
```json
{
  "imageURL": "https://example.com/image.jpg"
}
```

#### Response
```json
{
  "status": 200,
  "data": [
    {
      "label": "nsfw",
      "score": 0.7739658951759338
    },
    {
      "label": "sfw",
      "score": 0.22603408992290497
    }
  ]
}
```




