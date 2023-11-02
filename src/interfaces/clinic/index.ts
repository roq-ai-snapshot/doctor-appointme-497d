import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  appointment?: AppointmentInterface[];

  _count?: {
    appointment?: number;
  };
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  name?: string;
  tenant_id?: string;
}
