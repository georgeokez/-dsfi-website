import ExtraContent from "./ExtraContent";

const Content = ({context, title, extraContent}) => {
  const { content, contentItems } = extraContent ? extraContent : {};
  return (
    <div className="about-add-on-item-content">
        <h3>{title}</h3>
        <p>{context}</p>
        {extraContent ? <ExtraContent content={content} items={contentItems} /> : null}
    </div>
  )
}

export default Content;