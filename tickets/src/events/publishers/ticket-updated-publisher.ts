import { Publisher, Subjects, TicketUpdatedEvent } from '@rjgtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
