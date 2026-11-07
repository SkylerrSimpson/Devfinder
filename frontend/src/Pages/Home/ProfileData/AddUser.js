import {
  IoIosAddCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import useProfileContext from "../../../hook/useProfileContext";
import { useState } from "react";
const AddUser = ({ profile }) => {
  const [loading, setLoading] = useState(false);
  const { profiles, addProfile, removeProfile } = useProfileContext();
  const saved = profile && profiles.some((p) => p._id === String(profile.id));
  const toggle = async () => {
    if (!profile || loading) return;
    setLoading(true);
    try {
      if (saved) await removeProfile(profile.id);
      else await addProfile(profile);
    } catch {
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      type="button"
      className="icon-button"
      aria-label={saved ? "Remove saved profile" : "Save profile"}
      aria-pressed={!!saved}
      disabled={loading || !profile}
      onClick={toggle}
    >
      {saved ? (
        <IoIosCheckmarkCircleOutline size={59} color="green" />
      ) : (
        <IoIosAddCircleOutline size={59} color="gray" />
      )}
    </button>
  );
};
export default AddUser;
