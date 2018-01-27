var React  = require('react');
var ReactPropTypes = require('prop-types');
var api = require('../../utils/api.js');
var Loading = require('./Loading');

function SelectLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
      <ul className="languages">
          {languages.map((lang) => {
              return (
                  <li
                      style = {lang === props.selectedLanguage ? {color: '#d0021b'}: null}
                      onClick={props.onSelect.bind(null, lang)}
                      key={lang}>
                      {lang}
                  </li>
              )
          })}
      </ul>
  )
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map( (repo, index)=>{
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{index+1}</div>
            <ul className="space-list-items">
              <li>
                <img className="avatar"
                src={repo.owner.avatar_url}
                alt={'Avatar for' + repo.owner.login}/>
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes ={
  repos: ReactPropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selectedLanguage: ReactPropTypes.string.isRequired,
  onSelect: ReactPropTypes.func.isRequired
}


class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(function(){
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
          .then( (repos) => {
            this.setState(function (){
              return {
                repos: repos
              }
            })
        });
    }

    componentDidMount() {
      this.updateLanguage(this.state.selectedLanguage);
    }

    render(){
        return (
            <div>
              <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage}/>
                {!this.state.repos ? <Loading text='Hang On' speed={300}/> :
                <RepoGrid repos={this.state.repos} />}
            </div>

        )
    }
}

module.exports = Popular;
