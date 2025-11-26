export interface ImageData {
  name: string;
  url: string;
  category?: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  text: string;
  rating: number;
  role?: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  guests: number;
  eventType: string;
  message: string;
  date: string | null;
}