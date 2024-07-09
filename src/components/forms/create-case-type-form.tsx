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
import { Textarea } from '../ui/textarea';

interface ICreateCaseTypeForm {
    toggle: () => void;
    action: 'UPDATE' | 'SAVE';
}

const casesList = [
    { value: "caseA", label: "Case A" },
    { value: "caseB", label: "Case B" },
    { value: "caseC", label: "Case C" },
    { value: "caseD", label: "Case D" },
];

const formSchema = z.object({
    productName: z.string().min(1, { message: 'Enter case type name' }),
    description: z.string().min(1, { message: 'Enter case type description' }),
    caseTag: z.array(z.string()).nonempty({ message: 'Select at least one case tag' }),
    tagDetails: z.array(z.string()).nonempty({ message: 'Select at least one case tag' })
});

type UserFormValue = z.infer<typeof formSchema>;

const CreateCaseTypeForm: React.FC<ICreateCaseTypeForm> = ({ toggle, action }) => {
    const [selectedCases, setSelectedCases] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const defaultValues = {
        productName: '',
        description: '',
        caseTag: [],
        tagDetails: [],
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
        form.setValue('caseTag', [selectedCases[0], ...selectedCases.slice(1)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCases])

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2 flex gap-2 flex-col border border-gray-200 rounded-3xl p-4"
                >
                    <FormField
                        control={form.control}
                        name="productName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="string"
                                        placeholder="Enter product name"
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter description"
                                        disabled={loading}
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="caseTag"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Case tag</FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={casesList}
                                        onValueChange={setSelectedCases}
                                        defaultValue={selectedCases}
                                        placeholder="Select case tag"
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
                    <FormField
                        control={form.control}
                        name="tagDetails"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tag details</FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={casesList}
                                        onValueChange={setSelectedCases}
                                        defaultValue={selectedCases}
                                        placeholder="Enter case tag details"
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
                            <Button type="submit" disabled={loading} >{loading ? <LoaderCircle className='mr-2 animate-spin' /> : <Check className='mr-2' />} {action.toUpperCase()}</Button>
                        </DialogFooter>
                    </Dialog>
                </form>
            </Form>
        </>
    );
}

export default CreateCaseTypeForm;
