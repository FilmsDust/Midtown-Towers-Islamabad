
export interface ApartmentType {
  id: string;
  name: string;
  size: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Amenity {
  title: string;
  description?: string;
  icon: string;
}

export interface LocationDetail {
  distance: string;
  label: string;
}
