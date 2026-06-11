import Papa from 'papaparse';
import { lpData } from './data';
import { LandingPageConfig } from './types';

// Example CSV Format Expected:
// leadId,name,role,primaryColor,logoUrl,heroImageUrl,aboutImageUrl,instagramUrl,instagramHandle,googleMapsLink,address,whatsappNumber,whatsappMessage
export async function fetchAndApplyLeadData(leadId: string): Promise<void> {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSsr2f2wl5gCD574nYnc3EAfRc-QQzqd6JCx59EokIBPHEk5Rt5vP6Kpd2WH2xbGY8EPDPYFiyOJlYw/pub?output=csv";
  if (!csvUrl) {
    console.warn("VITE_GOOGLE_SHEET_CSV_URL not set. Using default data.");
    return;
  }

  try {
    const response = await fetch(csvUrl);
    const csvContent = await response.text();
    
    // Using papaparse to parse CSV with headers
    const result = Papa.parse<any>(csvContent, {
      header: true,
      skipEmptyLines: true,
    });

    const leadRow = result.data.find(row => row.leadId && row.leadId.trim() === leadId);

    if (leadRow) {
      applyLeadOverrides(leadRow);
    } else {
      console.warn(`Lead ${leadId} not found in the spreadsheet.`);
    }

  } catch (error) {
    console.error("Failed to fetch or parse CSV for lead data", error);
  }
}

function applyLeadOverrides(row: any) {
  // Theme
  if (row.primaryColor) lpData.theme.primaryColor = row.primaryColor.trim();
  if (row.logoUrl) lpData.theme.logoUrl = row.logoUrl.trim();

  // Contact
  if (row.whatsappNumber) lpData.contact.whatsappNumber = row.whatsappNumber.trim();
  if (row.whatsappMessage) lpData.contact.whatsappMessage = row.whatsappMessage.trim();
  if (row.address) lpData.contact.address = row.address.trim();
  if (row.googleMapsLink) lpData.contact.googleMapsLink = row.googleMapsLink.trim();

  // About
  if (row.name) lpData.about.name = row.name.trim();
  if (row.role) lpData.about.role = row.role.trim();
  if (row.aboutImageUrl) lpData.about.imageUrl = row.aboutImageUrl.trim();
  if (row.bio) lpData.about.bio = row.bio.trim();

  // Hero
  if (row.heroImageUrl) lpData.hero.imageUrl = row.heroImageUrl.trim();
  if (row.headline) lpData.hero.headline = row.headline.trim();
  if (row.subheadline) lpData.hero.subheadline = row.subheadline.trim();

  // Gallery (Instagram info)
  if (row.instagramUrl) lpData.gallery.instagramUrl = row.instagramUrl.trim();
  if (row.instagramHandle) lpData.gallery.instagramHandle = row.instagramHandle.trim();
}
