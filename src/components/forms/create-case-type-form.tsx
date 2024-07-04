'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Dialog, DialogFooter } from '../ui/dialog';
import { MultiSelect } from '../ui/multi-select';
import { Check, LoaderCircle } from 'lucide-react';

interface ICreateCaseTypeForm {
    toggle: () => void;
}

const casesList = [
    { value: "caseA", label: "Case A" },
    { value: "caseB", label: "Case B" },
    { value: "caseC", label: "Case C" },
    { value: "caseD", label: "Case D" },
];

const formSchema = z.object({
    name: z.string().min(1, { message: 'Enter your name' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    cases: z.array(z.string()).nonempty({ message: 'Select at least one case' })
});

type UserFormValue = z.infer<typeof formSchema>;

const CreateCaseTypeForm: React.FC<ICreateCaseTypeForm> = ({ toggle }) => {
    const [selectedCases, setSelectedCases] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const defaultValues = {
        email: '',
        name: '',
        cases: []
    };
    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema),
        shouldUnregister: true,
        defaultValues
    });

    const onSubmit = async (data: UserFormValue) => {
        console.log('[Invitaion Form] onSubmit - ', data);

        setLoading(true);
    };

    useEffect(() => {
        if (selectedCases.length === 0) return;
        form.setValue('cases', [selectedCases[0], ...selectedCases.slice(1)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCases])

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2 flex gap-2 flex-col"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>User's Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="string"
                                        placeholder="Enter user's name"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter user's email"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cases"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Case Type</FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={casesList}
                                        onValueChange={setSelectedCases}
                                        defaultValue={selectedCases}
                                        placeholder="Select case type..."
                                        variant="inverted"
                                        animation={0}
                                        maxCount={3}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Dialog>
                        <DialogFooter className='pt-3'>
                            <Button variant={'ghost'} disabled={loading} onClick={toggle}>Cancel</Button>
                            <Button type="submit" disabled={loading} >{loading ? <LoaderCircle className='mr-2 animate-spin' /> : <Check className='mr-2' />} Save</Button>
                        </DialogFooter>
                    </Dialog>
                </form>
            </Form>
        </>
    );
}

export default CreateCaseTypeForm;
