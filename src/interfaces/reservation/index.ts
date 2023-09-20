import { UserInterface } from 'interfaces/user';
import { RoomInterface } from 'interfaces/room';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  title: string;
  start_time: any;
  end_time: any;
  user_id: string;
  room_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  room?: RoomInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  user_id?: string;
  room_id?: string;
}
