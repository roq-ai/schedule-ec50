import { ActivityInterface } from 'interfaces/activity';
import { ReservationInterface } from 'interfaces/reservation';
import { GetQueryInterface } from 'interfaces';

export interface RoomInterface {
  id?: string;
  name: string;
  location?: string;
  capacity?: number;
  description?: string;
  created_at?: any;
  updated_at?: any;
  activity?: ActivityInterface[];
  reservation?: ReservationInterface[];

  _count?: {
    activity?: number;
    reservation?: number;
  };
}

export interface RoomGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  description?: string;
}
