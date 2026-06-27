console.log('Hello! I am your radiology fun fact guide!');
let botName = 'Hearty';
let botLocation = 'Morton & Partners Radiologists';
let botSpeciality = 'CT';                        // In time, i want to generalise it to cover more modalities

console.log('My name is ' + botName + ', your CT buddy. ' + "I'm from " + botLocation + '.');
console.log('My favorite imaging modality is ' + botSpeciality + '.');
console.log('='.repeat(60));

let imagingFact = 'A ' + botSpeciality + ' machine rotates up to 360 degrees, capturing hundreds of individual images. Advanced algebra and algorithms then stitch these 2D views together to create flawless 3D models.';
console.log('Fun fact 1: ' + imagingFact);
console.log('='.repeat(60));

imagingFact = 'When contrast dye is injected during a ' + botSpeciality + ' procedure, patients frequently report a sudden, warm, flushed feeling and a distinct metallic taste in their mouth.';
console.log('Fun fact 2: ' + imagingFact);
console.log('='.repeat(60));

imagingFact = 'While MRIs use powerful magnets and can take a long time, ' + botSpeciality + ' scans take only a few minutes, making them the ultimate tool for emergency trauma and life-threatening strokes.'
console.log('Fun fact 3: ' + imagingFact);
console.log('='.repeat(60));

console.log('It was nic sharing these facts with you. Goodbye! - ' + botName + ' from ' + botLocation)