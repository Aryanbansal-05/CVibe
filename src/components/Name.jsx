function CreateForm({ info, updateInfo }) {
    return (
        <div className="flex flex-col gap-3 py-4 w-[85%]">
            <div className="flex flex-col gap-1">
                <label htmlFor={`firstName-${info.id}`}>First Name</label>
                <input
                    type="text"
                    id={`firstName-${info.id}`}
                    value={info.firstName}
                    onChange={(e) =>
                        updateInfo("Personal", info.id, "firstName", e.target.value)
                    }
                    className="rounded-md p-1 bg-gray-200 border-gray-200"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor={`lastName-${info.id}`}>Last Name</label>
                <input
                    type="text"
                    id={`lastName-${info.id}`}
                    value={info.lastName}
                    onChange={(e) =>
                        updateInfo("Personal", info.id, "lastName", e.target.value)
                    }
                    className="rounded-md p-1 bg-gray-200 border-gray-200"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor={`occupation-${info.id}`}>occupation</label>
                <input
                    type="text"
                    id={`occupation-${info.id}`}
                    value={info.occupation}
                    onChange={(e) =>
                        updateInfo("Personal", info.id, "occupation", e.target.value)
                    }
                    className="rounded-md p-1 bg-gray-200 border-gray-200"
                />
            </div>

        </div>
    );
}