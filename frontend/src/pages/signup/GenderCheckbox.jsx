const GenderBox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="text-label">Male</span>
                    <input 
                        type="checkbox" 
                        className="checkbox border-slate-900 ${selectedGender === 'Male' ? 'selected' : ''}" 
                        checked={selectedGender === 'Male'}
                        onChange={() => onCheckboxChange("Male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="text-label">Female</span>
                    <input 
                        type="checkbox" 
                        className="checkbox border-slate-900 ${selectedGender === 'Female' ? 'selected' : ''}" 
                        checked={selectedGender === 'Female'}
                        onChange={() => onCheckboxChange("Female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderBox