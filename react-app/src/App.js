import {Grid} from 'react-bootstrap';
import React, {Component} from 'react';
import Arguments from './Arguments';
import UserSearch from './UserSearch';
import UserPage from './UserPage';
import HeadBox from './HeadBox';
import ProblemMainTable from './ProblemMainTable';
import BattleTable from './BattleTable';
import ListTable from './ListTable';
import PracticeTable from './PracticeTable';
import Ranking from './Ranking';
import './App.css';

class App extends Component {
  render() {
    const args = new Arguments();

    if (args.isUserPage()) {
      return (
        <Grid>
          <UserSearch name={args.name}/>
          <UserPage name={args.name}/>
        </Grid>
      );
    }

    if (args.isIndex()) {
      return (
        <Grid>
          <HeadBox name={args.name} rivals={args.rivals} kind={args.kind} trying={args.trying}/>
          <ProblemMainTable user={args.name} rivals={args.rivals}/>
        </Grid>
      );
    }
    if (args.isBattle()) {
      const rival = args.rivals.length > 0
        ? args.rivals[0]
        : "";
      return (
        <Grid>
          <HeadBox name={args.name} rivals={args.rivals} kind={args.kind} trying={args.trying}/>
          <BattleTable user={args.name} rival={rival}/>
        </Grid>
      );
    }
    if (args.isList()) {
      return (
        <Grid>
          <HeadBox name={args.name} rivals={args.rivals} kind={args.kind} trying={args.trying}/>
          <ListTable user={args.name} rivals={args.rivals} trying={args.trying}/>
        </Grid>
      );
    }

    if (args.isPractice()) {
      return (
        <Grid>
          <HeadBox name={args.name} rivals={args.rivals} kind={args.kind} trying={args.trying}/>
          <PracticeTable problems={args.name} users={args.rivals}/>
        </Grid>
      );
    }

    if (args.isRanking()) {
      return (
        <Grid>
          <Ranking ranking={args.ranking}/>
        </Grid>
      );
    }

    return (
      <Grid>React はつらいよ (jQuery の五億倍ラク)</Grid>
    );

  }
}

export default App;