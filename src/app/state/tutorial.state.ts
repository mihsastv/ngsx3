import {Tutorial} from '../models/tutorial.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddTutorial, RemoveTutorial} from '../actions/tutorila.action';

export class TutorialStateModel {
    tutorials: Tutorial[]
}

@State<TutorialStateModel>({
      name: 'tutorials',
      defaults: {
          tutorials: []
      }
})

export class TutorialState {
    @Selector()
    static getTutorials(state: TutorialStateModel) {
      return state.tutorials
    }

    @Action(AddTutorial)
    add({getState, patchState}: StateContext<TutorialStateModel>, { payLoad }: AddTutorial) {
         const state = getState();
         patchState({
              tutorials: [...state.tutorials, payLoad]
         })
    }

    @Action(RemoveTutorial)
    remove({getState, patchState}: StateContext<TutorialStateModel>, { payLoad }: RemoveTutorial) {
          patchState({
          tutorials: getState().tutorials.filter(a => a.name !== payLoad)
          })
  }


}
