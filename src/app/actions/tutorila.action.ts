import {Tutorial} from '../models/tutorial.model';

export class AddTutorial {
      static readonly type = '[TUTORIAL] Add'

      constructor(public payLoad: Tutorial) {}
}

export class RemoveTutorial {
  static readonly type = '[TUTORIAL] Remove'

  constructor(public payLoad: string) {}
}
