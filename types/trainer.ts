// Trainer entity interface
export interface Trainer {
  id: string;
  name: string;
  designation: string;
  yearsOfExperience: number;
  specialty: string;
  bio: string;
  photo: string; // Path to image
  instagram?: string; // Instagram handle (without @)
}
