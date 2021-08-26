class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
      `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
` };

  }

  handleChange() {
    this.setState({ value: this.refs.textarea.value });
  }

  rawMarkup() {
    return { __html: marked(this.state.value, { sanitize: true }) };
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "MarkdownEditor" }, /*#__PURE__*/
      React.createElement("div", { className: "box demo-card-square mdl-card mdl-shadow--2dp" }, /*#__PURE__*/
      React.createElement("div", { className: "mdl-card__title" }, /*#__PURE__*/
      React.createElement("h2", { className: "mdl-card__title-text" }, "Edit")), /*#__PURE__*/

      React.createElement("div", { className: "mdl-card__supporting-text" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor",
        onChange: () => this.handleChange(),
        ref: "textarea",
        defaultValue: this.state.value }))), /*#__PURE__*/



      React.createElement("div", { className: "box demo-card-square mdl-card mdl-shadow--2dp" }, /*#__PURE__*/
      React.createElement("div", { className: "mdl-card__title" }, /*#__PURE__*/
      React.createElement("h2", { className: "mdl-card__title-text" }, "Previewer")), /*#__PURE__*/

      React.createElement("div", { className: "mdl-card__supporting-text" }, /*#__PURE__*/
      React.createElement("div", { id: "preview",
        className: "content",
        dangerouslySetInnerHTML: this.rawMarkup() })))));





  }}
;

React.render( /*#__PURE__*/React.createElement(MarkdownEditor, null), document.getElementById('app'));