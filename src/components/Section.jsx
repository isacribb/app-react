export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        {/*<ul class="channel-list">{props.children}</ul>*/}
        <ul class="games-list">{props.children}</ul>
      </div>
    </section>
  );
}
