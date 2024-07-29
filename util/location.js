const GOOGLE_API_KEY = "AIzaSyCs4CFoDHas00xgk0CLFRxjLloQbbtzDM0";
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=17&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log(imagePreviewUrl);
  return imagePreviewUrl;
}