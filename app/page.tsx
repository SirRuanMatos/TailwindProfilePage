import SettingsTabs from "./components/SettingsTabs";

import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { Bold, Italic, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { Textarea } from "./components/Form/TextArea";
import { Button } from "./components/Button";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
                Settings
            </h1>

            <SettingsTabs />

            <div className="mt-6 flex-col">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-700">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                            Personal Info
                        </h2>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            Update your photo andd personal details here
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary">
                            Save
                        </Button>
                    </div>
                </div>

                <form
                    action=""
                    id="settings"
                    className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
                >
                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols) ">
                        <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Name
                        </label>
                        <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
                            <InputRoot>
                                <InputControl
                                    id="firstName"
                                    placeholder="First Name"
                                    defaultValue="Ruan"
                                />
                            </InputRoot>

                            <div className="flex flex-col gap-3 lg:block">
                                <label
                                    htmlFor="lastName"
                                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                                >
                                    Last Name
                                </label>
                                <InputRoot>
                                    <InputControl
                                        id="lastName"
                                        placeholder="Last Name"
                                        defaultValue="Ferreira"
                                    />
                                </InputRoot>
                            </div>
                        </div>
                        <div />
                    </div>
                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="emailAddress"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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
                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="photo"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
                        >
                            Your photo
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                This will be displayed on your profile
                            </span>
                        </label>
                        <FileInput.Root className="flex  gap-5 flex-col lg:flex-row lg:items-start">
                            <FileInput.ImagePreview />
                            <FileInput.Trigger />
                            <FileInput.Control />
                        </FileInput.Root>
                    </div>
                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="role"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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

                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="country"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Country
                        </label>
                        <Select placeholder="Select a country">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                        </Select>
                    </div>
                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="timezone"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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

                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="bio"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Bio
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                Write a short introduction.
                            </span>
                        </label>
                        <div className="space-y-3">
                            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                                <Select placeholder="" defaultValue="normal">
                                    <SelectItem
                                        value="normal"
                                        text="Normal Text"
                                    />
                                    <SelectItem value="md" text="Markdown" />
                                </Select>
                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" type="button">
                                        <Bold
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <Italic
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <List
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <ListOrdered
                                            className="w-4 h-4 text-zinc-500"
                                            strokeWidth={3}
                                        />
                                    </Button>
                                </div>
                            </div>
                            <Textarea
                                name="bio"
                                id="bio"
                                defaultValue="Hi! My name is **Ruan Ferreira**, I'm based in **Caxias do Sul, Brazil**, and I'm a **Full Stack Software Engineer** focused on building scalable and high-performance applications. I have over 6 years of experience working with React, TypeScript and Node.js, building e-commerce platforms and microservices. Today, I work as a Full Stack Engineer specialized in Oracle Commerce Cloud, where I develop and improve large e-commerce systems."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form-cols)">
                        <label
                            htmlFor="projects"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
