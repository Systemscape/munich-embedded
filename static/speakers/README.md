# Speaker Images and Information

This directory contains speaker images and related assets for the MEC website.

## Adding Real Talks

To replace the placeholder talks with real speaker information, follow these steps:

### 1. Add Speaker Images

- Add high-quality speaker photos to this directory
- Use descriptive filenames like `john-doe.jpg` or `jane-smith.png`
- Recommended image size: 400x400px or larger (square aspect ratio)
- Supported formats: JPG, PNG, SVG

### 2. Update the HTML Templates

Edit the relevant talk container in both `templates/index.html` and `templates/index_en.html`:

#### Example for Talk 1:
```html
<div class="highlighted-grid-element bg-white" id="talk-1">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="md:col-span-1">
            <img src="/speakers/john-doe.jpg" alt="John Doe" class="w-full rounded-lg object-cover aspect-square">
        </div>
        <div class="md:col-span-3">
            <h3 class="text-xl font-bold mb-2">Modern Embedded Security Patterns</h3>
            <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">Vortrag (25 min)</span>
            </div>
            <div class="mb-4">
                <h4 class="font-bold text-gray-800 mb-2">Speaker Bio</h4>
                <p class="text-gray-700">John Doe is a Senior Embedded Systems Engineer with over 10 years of experience in IoT security and automotive systems. He currently works at TechCorp and has contributed to several open-source security frameworks.</p>
            </div>
            <div>
                <h4 class="font-bold text-gray-800 mb-2">Abstract</h4>
                <p class="text-gray-700">This talk explores modern security patterns in embedded systems, focusing on hardware-based security implementations, secure boot processes, and cryptographic best practices for resource-constrained devices.</p>
            </div>
        </div>
    </div>
</div>
```

### 3. Update Schedule Links

Make sure the schedule links in both templates point to the correct talk IDs:

```html
<b><a href="#talk-1" class="text-blue-600 hover:text-blue-800">Modern Embedded Security Patterns</a></b>
```

### 4. Badge Colors

Use different colored badges to distinguish talk types:
- `bg-blue-100 text-blue-800` for regular talks
- `bg-orange-100 text-orange-800` for lightning talks
- `bg-green-100 text-green-800` for alternative styling

### 5. Files to Update

When adding real talks, update these files:
- `templates/index.html` (German version)
- `templates/index_en.html` (English version)
- Add speaker images to `static/speakers/`

### 6. Placeholder Removal

The current placeholder image `placeholder-speaker.svg` can be removed once all real speaker images are added.