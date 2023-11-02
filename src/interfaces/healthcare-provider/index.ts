import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  provider_name: string;
  provider_type: string;
  address: string;
  phone_number: string;
  user_id: string;
  services_offered?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  provider_name?: string;
  provider_type?: string;
  address?: string;
  phone_number?: string;
  user_id?: string;
  services_offered?: string;
}
