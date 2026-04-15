import { useState, useEffect } from "preact/hooks";
import { connect } from "unistore/preact";

import Section from "wrappers/Section";
import Loader from "elements/Loader";

import useOnce from "hooks/use-once";

import actions from "./actions";

export default connect(mapStateToProps, actions)(Discovery);

function Discovery({ fetchDiscoveryClaim, claim }) {

	const [delayedForEffect, setDelayedForEffect] = useState(false);

	// this is the tree when user selects ai creation in discovery mode

	useOnce(fetchDiscoveryClaim);

	// after fetching the ckaun, we wait a second to show the claim being generated
	useEffect(() => {
		if (claim && !delayedForEffect) setTimeout(() => {
			return setDelayedForEffect(true);
		}, 2000);
	}, [claim]);

	if (!claim) return <Loader label="Choosing an intellectual" />;

	if (!delayedForEffect) return <Loader label="Generating a Claim" />;

	return <Claim claim={claim} />;

}

function mapStateToProps ({ arcade }) {
	return {
		claim: arcade.claim
	};
}

function Claim({ claim }) {
	return <Section className="is-medium">

		<h1 className="title is-5">Here&apos;s a Claim</h1>
		<p className="subtitle is-6">Let&apos;s use it as a starting point. Do you find the Claim to be true?</p>

		<div className="card mt-6">
			<div className="card-content">
				<p className="title">
					{claim.content}
				</p>
				<p className="subtitle">{claim.author.name}</p>
			</div>
			<div className="card-footer">
				<a className="card-footer-item has-text-success">
					Agree
				</a>
				<a className="card-footer-item has-text-danger">
					Disagree
				</a>
			</div>
		</div>

	</Section>;
}