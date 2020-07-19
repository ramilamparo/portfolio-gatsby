import React, { ReactElement } from "react";
import { SEO } from "../components/utils/SEO";
import { SkillBar } from "../components/SkillBar";
import webDevLogo from "../assets/images/icon.png";

export default (): ReactElement => {
	return (
		<>
			<SEO title={"About"} />
			<SkillBar
				title="Web Development"
				score={10}
				logo={webDevLogo}
				description={`
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a suscipit arcu, quis tincidunt erat. Phasellus faucibus purus in euismod imperdiet. Nunc consectetur ex at dui finibus elementum. Aliquam et enim tempor, tempor mauris sit amet, facilisis nibh. Sed vel ante rutrum, tempor ligula eu, tempus felis. Donec vulputate tincidunt diam, et gravida ex pharetra sit amet. Aliquam pellentesque convallis consectetur. Quisque condimentum arcu luctus eros hendrerit tincidunt. Curabitur accumsan elementum justo, at laoreet odio bibendum laoreet.

					Fusce vitae porta orci. Praesent a turpis hendrerit, vulputate orci vel, malesuada leo. Maecenas dignissim risus non ex dapibus ultrices. Vivamus dapibus turpis quis feugiat consectetur. Morbi leo erat, pretium id lacinia vitae, semper eu tortor. Morbi eu maximus lectus. Sed pulvinar, odio ac congue accumsan, magna arcu accumsan ipsum, in ultricies mauris massa at velit. Vestibulum laoreet dignissim nisl, id gravida dui facilisis nec. Suspendisse molestie pulvinar rhoncus. Vivamus sed venenatis ante. Phasellus mattis est scelerisque, placerat ante nec, imperdiet nunc. Vivamus ligula nulla, placerat vel iaculis vel, semper eget est. Aenean elit turpis, tempus sed vehicula sit amet, ultricies vel tortor. Quisque placerat et magna dignissim pretium.

					Fusce ut lobortis nulla. Maecenas malesuada velit in ex mollis tincidunt. Aliquam nisi ligula, mollis vel massa quis, maximus aliquam eros. Sed congue dolor a elementum lacinia. Ut quis dictum elit, vel pellentesque nunc. Mauris iaculis vestibulum ex ut consequat. Nulla facilisi. Nam non tempus dolor, porta tempor nulla. Aenean magna tellus, interdum nec nulla nec, rhoncus posuere ipsum. Ut vel molestie ante. Ut fringilla venenatis neque, vel facilisis massa pellentesque quis. Etiam dictum dictum mollis. Sed sed ipsum suscipit, faucibus lorem non, rutrum felis. Sed non ligula gravida, ultricies lectus quis, imperdiet justo. Proin dignissim maximus odio consectetur iaculis.

					Ut tempor dolor urna, vel dapibus nisl aliquam sed. Vestibulum facilisis ipsum vitae lobortis facilisis. Maecenas tortor tortor, euismod et eleifend quis, sagittis sed neque. Curabitur interdum mauris a dolor pellentesque tincidunt. Proin nec nunc a arcu faucibus tincidunt maximus eu nulla. In non tristique nisi. In blandit est turpis, quis blandit lacus porta sit amet. Vivamus fermentum, ligula non accumsan porta, magna quam vehicula ante, eget rhoncus turpis lacus a urna. Aliquam at lorem vel turpis fermentum lobortis. Sed in auctor diam. Vivamus urna diam, semper quis semper ac, tristique nec velit.

					Nullam ex orci, lacinia vel risus sit amet, hendrerit pellentesque ante. Quisque ac imperdiet eros, eu tincidunt leo. Praesent viverra, velit eget congue efficitur, diam eros vulputate lacus, eget euismod orci elit id ante. Suspendisse ac condimentum lorem, consectetur facilisis erat. Vestibulum a ultricies sem, at imperdiet mi. Vivamus iaculis rhoncus felis id mollis. Praesent mattis sed orci id gravida. Fusce scelerisque elementum diam et finibus. Vivamus eget massa massa. Duis sapien felis, mattis sit amet magna sed, eleifend commodo nunc. 
			`}
			/>
		</>
	);
};
