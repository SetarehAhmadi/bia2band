import About from "./components/about";
import Connect from "./components/connect";
import FurtherInformation from "./components/furtherinformation";
import Profesional from "./components/myprofesional";
import Personal from "./components/personal";

const EditProfile = () => (
	<div className="pb-10 pt-5">
		<div className="mb-5">
			<Personal />
		</div>
		<div className="mb-5">
			<Connect />
		</div>
		<div className="mb-5">
			<About />
		</div>
		<div className="mb-5">
			<Profesional />
		</div>
		<div className="mb-5">
			<FurtherInformation />
		</div>


	</div>



);

export default EditProfile;
