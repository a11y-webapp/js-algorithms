<h2>React</h2>

<h3>Components types:</h3>

<p> Components in React can be defined via function (so-called functional components) or classes. </p>
<h4>Data flow</h4>
<p> Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class. This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it. A component may choose to pass its state down as props to its child components, but child component would receive the date in its props and wouldn’t know whether it came from the state, from the props, or was typed by hand.</p>
<p>This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree. If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.</p>

<ul>
    <li><strong>Stateful Component</strong><p>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p></li>
</ul>