import { Resolver } from '@nestjs/graphql';
import { ReservationDocument } from './models/reservation.schema';
import { ReservationsService } from './reservations.service';

@Resolver(() => ReservationDocument)
export class ReservationsResolver {
  constructor(private readonly reservationsService: ReservationsService) {}
}
