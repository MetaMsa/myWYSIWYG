export default function Text({content}) {
  return (
    <>
      <div className="bg-white" translate="no" dangerouslySetInnerHTML={{__html:content}}>
      </div>
    </>
  );
}
