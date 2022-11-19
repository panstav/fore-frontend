export default function WrapConditionally({ wrapper, children, ...props }) {
	const Wrapper = wrapper;
	return (props.if)
		? <Wrapper>{children}</Wrapper>
		: children;
}