// // Initialize Tweakpane
// const pane = new Tweakpane.Pane();

// // Main parameters for controls
// const PARAMS = {
//   factor: 123,
//   title: 'hello',
//   color: '#ff0055',
//   percentage: 50,
//   theme: 'dark', // Light/Dark mode toggle
//   size: 25, // Added size slider value
// };

// // Add basic inputs
// pane.addInput(PARAMS, 'factor', { label: 'Factor' });
// pane.addInput(PARAMS, 'title', { label: 'Title' });
// pane.addInput(PARAMS, 'color', { label: 'Color Picker' });

// // Add a slider for percentage
// pane.addInput(PARAMS, 'percentage', {
//   min: 0,
//   max: 100,
//   step: 10,
//   label: 'Percentage',
// });

// // Add a dropdown for light/dark theme
// pane.addInput(PARAMS, 'theme', {
//   options: { Dark: 'dark', Light: 'light' },
//   label: 'Theme',
// }).on('change', (ev) => {
//   // Change the background color based on theme
//   document.body.style.backgroundColor = ev.value === 'dark' ? '#1e1e1e' : '#ffffff';
//   document.body.style.color = ev.value === 'dark' ? '#ffffff' : '#000000';
// });

// // Add a slider for size
// pane.addInput(PARAMS, 'size', {
//   min: 8,
//   max: 100,
//   step: 1,
//   label: 'Size',
// }).on('change', (ev) => {
//   console.log(`Size changed to: ${ev.value}`);
// });

// // Add a folder for advanced settings
// const folder = pane.addFolder({
//   title: 'Advanced Settings',
//   expanded: true, // Default to expanded
// });

// // Add inputs inside the folder
// folder.addInput(PARAMS, 'factor', { label: 'Factor Inside Folder' });
// folder.addInput(PARAMS, 'percentage', { label: 'Folder Percentage' });

// // Add a button to export settings
// pane.addButton({
//   title: 'Export Settings',
// }).on('click', () => {
//   const preset = pane.exportPreset();
//   console.log('Exported Preset:', preset);
// });

// // Event listener to show exported settings in console
// console.log('Interface Loaded');
