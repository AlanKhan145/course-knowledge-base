# Previewing the Picked Image

## Overview
This lecture focuses on displaying the picked image as a preview within the `ImageInput` widget and also showing a thumbnail of the place image in the Places list and the Place Details screen. Using `Image.file()` renders a local file-based image, replacing the placeholder text once an image is selected. This closes the feedback loop for the user after taking a photo.

## Key Points
- `Image.file(file, fit: BoxFit.cover)` is used to display a `dart:io` `File` as a Flutter image widget
- The `ImageInput` widget switches its displayed content from the placeholder `Container` to an `Image.file` widget when `_selectedImage != null`
- In the Places list, a leading thumbnail is added to each `ListTile` using `Image.file`
- In the Place Details screen, a full-width image is shown at the top of the screen using `Image.file`

## Code Example
```dart
// In ImageInput widget build method
Widget content = GestureDetector(
  onTap: _takePicture,
  child: Container(
    /* placeholder styling */
    child: const Text('No image selected'),
  ),
);

if (_selectedImage != null) {
  content = GestureDetector(
    onTap: _takePicture,
    child: Image.file(
      _selectedImage!,
      fit: BoxFit.cover,
      width: double.infinity,
      height: double.infinity,
    ),
  );
}

// In PlaceDetailScreen
Image.file(
  place.image,
  fit: BoxFit.cover,
  width: double.infinity,
  height: 300,
)
```

## Notes
`BoxFit.cover` ensures the image fills its container while maintaining aspect ratio, cropping if necessary — this is the most common fit mode for photo previews. Always keep the `GestureDetector` wrapping the preview image so users can retake the photo by tapping it. The `Image.file` widget reads from the device's file system at the given path every time it renders, so it always shows the current file contents.

## Summary
Picked images are previewed using `Image.file()` with `BoxFit.cover`, providing visual feedback in both the input widget and throughout the app wherever the place is displayed.
