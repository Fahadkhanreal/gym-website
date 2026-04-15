# Image Setup Guide

## Required Images

Your gym website needs the following images to be fully functional:

### 1. Hero Background
- **Path**: `public/images/hero-bg.jpg`
- **Size**: 1920x1080px (or larger)
- **Description**: High-quality gym interior or workout scene
- **Recommendation**: Use Unsplash.com - search "gym interior" or "fitness center"

### 2. Trainer Photos (3 images)
- **Paths**: 
  - `public/images/trainers/trainer-1.jpg`
  - `public/images/trainers/trainer-2.jpg`
  - `public/images/trainers/trainer-3.jpg`
- **Size**: 400x400px (square)
- **Description**: Professional headshots of trainers
- **Recommendation**: Use Unsplash.com - search "fitness trainer portrait"

### 3. Gallery Images (6 images)
- **Paths**: 
  - `public/images/gallery/gym-1.jpg` through `gym-6.jpg`
- **Size**: 800x600px (or similar aspect ratio)
- **Description**: Various gym areas - equipment, cardio, classes, etc.
- **Recommendation**: Use Unsplash.com - search "gym equipment", "fitness center interior"

### 4. Testimonial Photos (4 images)
- **Paths**: 
  - `public/images/testimonials/client-1.jpg` through `client-4.jpg`
- **Size**: 200x200px (square)
- **Description**: Client photos (can use stock photos)
- **Recommendation**: Use Unsplash.com - search "fitness portrait" or "athlete portrait"

### 5. Open Graph Image
- **Path**: `public/images/og-image.jpg`
- **Size**: 1200x630px
- **Description**: Social media preview image with gym logo/branding
- **Recommendation**: Create using Canva or similar tool with gym name and tagline

## Quick Setup Options

### Option 1: Use Placeholder Generator (Fastest)
1. Open `public/images/placeholder-generator.html` in your browser
2. Download all generated placeholder images
3. Save them to the correct paths listed above
4. Replace with real images later

### Option 2: Download from Unsplash (Best Quality)
1. Visit https://unsplash.com
2. Search for relevant terms (see recommendations above)
3. Download free high-quality images
4. Resize if needed using online tools like https://squoosh.app
5. Save to the correct paths

### Option 3: Use Placeholder Service (Temporary)
Update image paths in components to use placeholder services:
- https://placehold.co/1920x1080/1a1a1a/ffffff?text=Hero+Background
- https://placehold.co/400x400/FF6200/ffffff?text=Trainer+1

## Image Optimization Tips

1. **Format**: Use WebP format for better compression (Next.js handles this automatically)
2. **Size**: Keep file sizes under 500KB for fast loading
3. **Dimensions**: Provide images at 2x the display size for retina displays
4. **Compression**: Use tools like TinyPNG or Squoosh before uploading

## Current Status

✅ Image directories created
✅ Placeholder generator available
⏳ Actual images need to be added

## Next Steps

1. Choose one of the setup options above
2. Add images to the correct paths
3. Test the website to ensure images load correctly
4. Run `npm run dev` and check http://localhost:3000
