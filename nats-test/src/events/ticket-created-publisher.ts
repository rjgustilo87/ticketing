import { Publisher } from '../../../common/events/base-publisher';
import { TicketCreatedEvent } from '../../../common/events/ticket-created-event';
import { Subjects } from '../../../common/events/subjects';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
