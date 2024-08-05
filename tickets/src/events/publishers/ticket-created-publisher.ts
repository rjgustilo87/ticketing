import { Publisher, Subjects, TicketCreatedEvent } from '@rjgtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
