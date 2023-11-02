import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceInterface {
  id?: string;
  provider_name: string;
  policy_number: string;
  coverage_start_date: any;
  coverage_end_date: any;
  patient_id: string;
  coverage_details?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InsuranceGetQueryInterface extends GetQueryInterface {
  id?: string;
  provider_name?: string;
  policy_number?: string;
  patient_id?: string;
  coverage_details?: string;
}
