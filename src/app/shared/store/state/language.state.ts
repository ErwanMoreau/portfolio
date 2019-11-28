import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetLanguageChoose } from '../actions/language.actions';
import { LanguageStateModel } from '../model/language.model';

@State<LanguageStateModel>({
    name: 'settings',
    defaults: {
        Languagechoose: 'fr'
    }
  })

export class LanguageState {

    // tslint:disable-next-line: prefer-inline-decorator
    @Selector()
    static LanguageChoose(state: LanguageStateModel) {
        return state.Languagechoose;
    }

    // tslint:disable-next-line: prefer-inline-decorator
    @Action(GetLanguageChoose)
    // tslint:disable-next-line: max-line-length
    GetLanguageChoose(ctx: StateContext<LanguageStateModel>,  { myUserSettings }: GetLanguageChoose) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            Languagechoose: myUserSettings
        });
    }
}
