import { RoomInterface } from 'interfaces/room';
import { GetQueryInterface } from 'interfaces';

export interface ActivityInterface {
  id?: string;
  name: string;
  description?: string;
  start_time: any;
  end_time: any;
  room_id: string;
  created_at?: any;
  updated_at?: any;

  room?: RoomInterface;
  _count?: {};
}

export interface ActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  room_id?: string;
}
