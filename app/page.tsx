import SettingsTabs from "./components/SettingsTabs";

import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { Bold, Italic, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { Textarea } from "./components/Form/TextArea";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

            <SettingsTabs />

            <div className="mt-6 flex-col">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900">
                            Personal Info
                        </h2>
                        <span className="text-sm text-zinc-500">
                            Update your photo andd personal details here
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            form="settings"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm cursor-pointer text-white bg-violet-600 hover:bg-violet-700 "
                        >
                            Save
                        </button>
                    </div>
                </div>

                <form
                    action=""
                    id="settings"
                    className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
                >
                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Name
                        </label>
                        <div className="grid gap-6 grid-cols-2">
                            <InputRoot>
                                <InputControl
                                    id="firstName"
                                    placeholder="First Name"
                                    defaultValue="Ruan"
                                />
                            </InputRoot>
                            <InputRoot>
                                <InputControl
                                    id="lastName"
                                    placeholder="Last Name"
                                    defaultValue="Ferreira"
                                />
                            </InputRoot>
                        </div>
                        <div />
                    </div>
                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="emailAddress"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Email
                        </label>
                        <InputRoot>
                            <InputPrefix>
                                <Mail className="h-5 w-5 text-zinc-500" />
                            </InputPrefix>
                            <InputControl
                                id="email"
                                placeholder="Email"
                                type="email"
                                defaultValue="ruanmatos96@gmail.com"
                            />
                        </InputRoot>
                    </div>
                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="photo"
                            className="text-sm font-medium text-zinc-700 "
                        >
                            Your photo
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                This will be displayed on your profile
                            </span>
                        </label>
                        <FileInput.Root className="flex items-start gap-5">
                            <FileInput.ImagePreview />
                            <FileInput.Trigger />
                            <FileInput.Control />
                        </FileInput.Root>
                    </div>
                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="role"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Role
                        </label>
                        <InputRoot>
                            <InputControl
                                id="role"
                                placeholder="Role"
                                type="role"
                                defaultValue="Full Stack Software Engineer"
                            />
                        </InputRoot>
                    </div>

                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="country"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Country
                        </label>
                        <Select placeholder="Select a country">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                        </Select>
                    </div>
                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="timezone"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Timezone
                        </label>
                        <Select placeholder="Select a timezone...">
                            <SelectItem
                                value="utc-8"
                                text="Pacific Standard Time (UTC-08:00)"
                            />
                            <SelectItem
                                value="utc-3"
                                text="America São Paulo (UTC-03:00)"
                            />
                        </Select>
                    </div>

                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="bio"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Bio
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                Write a short introduction.
                            </span>
                        </label>
                        <div className="space-y-3">
                            <div className="grid gap-3 grid-cols-2">
                                <Select placeholder="" defaultValue="normal">
                                    <SelectItem
                                        value="normal"
                                        text="Normal Text"
                                    />
                                    <SelectItem value="md" text="Markdown" />
                                </Select>
                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        className="p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                                    >
                                        <Bold
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                                    >
                                        <Italic
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                                    >
                                        <List
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                                    >
                                        <ListOrdered
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </button>
                                </div>
                            </div>
                            <Textarea
                                name="bio"
                                id="bio"
                                defaultValue="Hi! My name is **Ruan Ferreira**, I'm based in **Caxias do Sul, Brazil**, and I'm a **Full Stack Software Engineer** focused on building scalable and high-performance applications. I have over 6 years of experience working with React, TypeScript and Node.js, building e-commerce platforms and microservices. Today, I work as a Full Stack Engineer specialized in Oracle Commerce Cloud, where I develop and improve large e-commerce systems."
                            />
                        </div>
                    </div>
                    <div className="grid gap-3 grid-cols-(--form-cols) pb-5">
                        <label
                            htmlFor="projects"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Portfolio projects
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                Share a few snippets of your work
                            </span>
                        </label>
                        <FileInput.Root>
                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                        </FileInput.Root>
                    </div>

                    <div className="flex flex-items-center justify-end gap-2 pt-5">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm cursor-pointer text-white bg-violet-600 hover:bg-violet-700 "
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
